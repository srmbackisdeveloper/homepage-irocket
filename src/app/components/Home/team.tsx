import { Avatar } from '@nextui-org/react'
import AvatarImage from '../../home/avatar.png'
import Image from 'next/image';

export const Team = () => {
   return (
      <div className="mt-[6em] p-10" id='team'>
         <h2 className="text-4xl font-semibold text-center">Наша команда</h2>
         <div className="flex gap-10 justify-center items-center py-10">
            <div>
               <Image
                  src={AvatarImage}
                  alt='Avatar'
                  className="w-20 rounded-full h-20 text-large border-1 border-gray-300"
               />
               <p className="grid justify-center items-center font-bold">
                  Фархат
               </p>
               <p className="grid justify-center items-center">Создатель</p>
            </div>
            <div className="grid">
               <Image
                  src={AvatarImage}
                  alt='Avatar'
                  className="w-20 rounded-full h-20 text-large border-1 border-gray-300"
               />
               <p className="font-bold ml-2">Ерболат</p>
               <p className="grid justify-center items-center">Директор</p>
            </div>
            <div className="grid">
               <Image
                  src={AvatarImage}
                  alt='Avatar'
                  className="w-20 rounded-full h-20 text-large border-1 border-gray-300"
               />
               <p className="grid justify-center items-center font-bold">
                  Айгерим
               </p>
               <p className="grid justify-center items-center">Менеджер</p>
            </div>
         </div>
      </div>
   )
}
