'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import { app } from '../firebase';

import {
    addDoc,
    collection,
    getFirestore,
    serverTimestamp,
  } from 'firebase/firestore';

export default function Input() {
    const { data: session } = useSession();
    const [text, setText] = useState('');
    const [postLoading, setPostLoading] = useState(false)
    const db = getFirestore(app);

    const handleSubmit = async () => {
        setPostLoading(true);
        const docRef = await addDoc(collection(db, 'posts'), {
            uid: session.user.uid,
            name: session.user.name,
            username: session.user.username,
            text,
            profileImg: session.user.image,
            timestamp: serverTimestamp(),
        });
        setPostLoading(false);
        setText('');
    };

    if (!session) return null;

  return (
    <div className='flex border-b border-gray-200 p-3 space-x-3 w-full'>
      <img
        src={session.user.image}
        alt='user-img'
        className='h-11 w-11 rounded-full cursor-pointer hover:brightness-95'
      />
      <div className='w-full divide-y divide-gray-200'>
      <textarea
            className='w-full border-none outline-none tracking-wide min-h-[50px] text-gray-700 '
            placeholder='Have any tips?'
            rows='2'
            value={text}
            onChange={(e) => setText(e.target.value)}
        ></textarea>
        <div className='flex items-center justify-between pt-2.5'>
        <button
            disabled={text.trim() === '' || postLoading}
            className='bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50'
            onClick={handleSubmit}
            >
            Post
          </button>
        </div>
      </div>
    </div>
  )
}
