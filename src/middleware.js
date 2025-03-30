import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  
  // Check if the hostname starts with 'www.'
  if (url.hostname.startsWith('www.')) {
    // Create new URL without 'www.'
    const newUrl = new URL(url);
    newUrl.hostname = url.hostname.replace(/^www\./, '');
    
    // Return a 301 redirect
    return context.redirect(newUrl.toString(), 301);
  }
  
  // If not a www domain, continue with the request
  return await next();
});
