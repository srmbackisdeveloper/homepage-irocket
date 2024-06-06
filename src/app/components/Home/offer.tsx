import { Card, CardFooter, CardBody } from '@nextui-org/react';
import CardImage1 from '../../home/card1.svg';
import CardImage2 from '../../home/card2.svg';
import CardImage3 from '../../home/card3.svg';
import Image from 'next/image';

export const Offer = () => {
    return (
        <div className="md:pt-24 pt-24 p-10" id='offer'>
            <h2 className="text-4xl font-semibold text-center">
                Что мы предлагаем?
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-10 gap-5 md:px-20">
                <Card className="py-4 bg-slate-100 flex flex-col items-center max-w-sm lg:max-w-xs mx-auto">
                    <CardBody className="overflow-visible py-2 flex justify-center items-center w-full">
                        <Image src={CardImage1} alt="Img 1" layout="responsive" width={320} height={240} className="object-cover rounded-xl max-w-full" />
                    </CardBody>
                    <CardFooter className="pb-0 pt-2 px-4 flex-col justify-center gap-2 text-center">
                        <h4 className="font-bold text-large text-danger">
                            Экономим Ваше время
                        </h4>
                        <p className="text-tiny uppercase font-bold">
                            Все процессы автоматизированы, и не требуют вашего внимания
                        </p>
                    </CardFooter>
                </Card>
                <Card className="py-4 bg-slate-100 flex flex-col items-center max-w-sm lg:max-w-xs mx-auto">
                    <CardBody className="overflow-visible py-2 flex justify-center items-center w-full">
                        <Image src={CardImage2} alt="Img 2" layout="responsive" width={320} height={240} className="object-cover rounded-xl max-w-full" />
                    </CardBody>
                    <CardFooter className="pb-0 pt-2 px-4 flex-col justify-center gap-2 text-center">
                        <h4 className="font-bold text-large text-danger">
                            Обойдем конкурентов
                        </h4>
                        <p className="text-tiny uppercase font-bold">
                            Поможем оставить всех ваших конкурентов далеко позади
                        </p>
                    </CardFooter>
                </Card>
                <Card className="py-4 bg-slate-100 flex flex-col items-center max-w-sm lg:max-w-xs mx-auto">
                    <CardBody className="overflow-visible py-2 flex justify-center items-center w-full">
                        <Image src={CardImage3} alt="Img 3" layout="responsive" width={320} height={240} className="object-cover rounded-xl max-w-full" />
                    </CardBody>
                    <CardFooter className="pb-0 pt-2 px-4 flex-col justify-center gap-2 text-center">
                        <h4 className="font-bold text-large text-danger">
                            Увеличим продажи
                        </h4>
                        <p className="text-tiny uppercase font-bold">
                            Благодаря iRocket, ваши товары всегда будут на первых
                            позициях!
                        </p>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
