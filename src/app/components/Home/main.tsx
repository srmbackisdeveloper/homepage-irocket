import { Button, Link } from '@nextui-org/react'
import MainImage from '../../home/main.svg'
import Image from 'next/image';

export const Main = () => {
   return (
      <div className="grid">
         <div className="grid p-10 lg:grid-cols-2 bg-slate-100">
            <div>
               <Image src={MainImage} alt='Main image' width={500} className="hidden lg:block" />
            </div>
            <div className="grid items-center">
               <div className="flex flex-col justify-center items-center gap-10">
                  <h1 className="text-5xl font-semibold text-start">
                     Поставим Ваш магазин <br /> на{' '}
                     <span className="text-danger">1 место</span> и удержим Вас там
                  </h1>
                  <Button
                     as={Link}
                     color="danger"
                     variant="shadow"
                     href='https://app.irocket.kz/register'
                     className="min-w-44 font-semibold"
                     size='lg'
                  >
                     Попробовать бесплатно
                  </Button>
                  <p className="font-semibold text-center">
                     Не упустите шанс увеличить свои продажи и обеспечить
                     стабильный поток заказов
                  </p>
               </div>
            </div>
         </div>
      </div>
   )
}
