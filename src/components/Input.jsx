'use client';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
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
        location.reload();
    };

    if (!session) return null;

  return (
    <div className='flex border-b border-gray-200 p-3 space-x-3 w-full'>
      <img
        src={session.user.image}
        alt='user-img'
        className='h-11 w-11 rounded-full cursor-pointer hover:brightness-95'
      />
      <div className='w-full'>
      <input
            className='bg-zinc-600 border border-yellow-500 rounded-3xl text-sm w-full px-4 py-2 placeholder-yellow-500'
            placeholder='Have any tips?'
            rows='2'
            value={text}
            onChange={(e) => setText(e.target.value)}
        ></input>
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
