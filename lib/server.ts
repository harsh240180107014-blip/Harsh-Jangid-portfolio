import {env} from 'cloudflare:workers';
import {getChatGPTUser} from '../app/chatgpt-auth';
import {initial, voiceProject, movieProject, type Content} from './content';
export async function isOwner(){const u=await getChatGPTUser();return !!u&&u.email.toLowerCase()==='realharshjangid@gmail.com';}
export async function readContent():Promise<Content>{
 const row=await env.DB!.prepare('SELECT data FROM portfolio WHERE id = ?').bind('main').first<{data:string}>();
 if(!row)return initial;
 const c:Content=JSON.parse(row.data);const revision=c.contentRevision??0;
 if(revision<3){
  if(revision<1){if(!c.projects.some(p=>p.id===voiceProject.id))c.projects.unshift(voiceProject);if(!c.github)c.github=initial.github;}
  if(revision<2){const movie=c.projects.find(p=>p.id===movieProject.id);if(movie){const {title,category,summary,tags,role,details,repo}=movieProject;Object.assign(movie,{title,category,summary,tags,role,details,repo});}else c.projects.push(movieProject);}
  if(c.intro==='I turn curiosity into practical code. A Computer Engineering student exploring software development, data-focused applications, and the small details that make a program work.')c.intro=initial.intro;
  c.contentRevision=3;
  const result=await env.DB!.prepare('UPDATE portfolio SET data = ? WHERE id = ? AND data = ?').bind(JSON.stringify(c),'main',row.data).run();
  if(!result.meta.changes)return readContent();
 }
 return c;
}
export function safeLink(s:string){return !s||s.startsWith('/media/')||s==='/Harsh-Jangid-Resume.pdf'||s==='/social.svg'||s==='/social.png'||/^https:\/\//.test(s);}
