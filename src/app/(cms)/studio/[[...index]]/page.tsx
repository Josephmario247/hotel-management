 "use client";

 import {NextStudio} from 'next-sanity/studio';
 import  Config  from '../../../../../sanity.config';

 export default function Studio() {
    return <NextStudio config={Config} />;
 }