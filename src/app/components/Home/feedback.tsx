import { Card, CardFooter } from '@nextui-org/react';
import Feedback1 from '../../home/feedback1.jpeg';
import Feedback2 from '../../home/feedback2.png';
import Feedback3 from '../../home/feedback3.png';
import Image from 'next/image';

export const Feedback = () => {
    return (
        <div className="mt-[6em] p-10 bg-slate-100" id="feedback">
            <div className="pt-10">
                <h2 className="text-4xl font-semibold text-center">
                    Прочтите, что говорят наши клиенты
                </h2>
                <p className="text-tiny uppercase font-bold text-center mt-4">
                    Реальные отзывы наших партнеров. В системе можно оставлять
                    отзывы, которые публикуются здесь
                </p>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-10 gap-10 pb-20 md:px-20">
                <Card isFooterBlurred radius="lg" className="border-none mx-auto flex flex-col items-center w-full max-w-xs">
                    <Image
                        alt="Feedback-1"
                        className="object-cover"
                        src={Feedback1}
                    />
                    <CardFooter className="justify-between bg-white before:bg-white border-white border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex items-center">
                        <div className="h-20 overflow-auto py-1 text-center">
                            Мы с партнером действующие продавцы Kaspi. Сделали лучшую
                            аналитику для себя и для вас. Людей которые хотят увеличить
                            свои обороты и получить доступную по деньгам и точную
                            аналитику
                        </div>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred radius="lg" className="border-none mx-auto flex flex-col items-center w-full max-w-xs">
                    <Image
                        alt="Feedback-2"
                        className="object-cover"
                        src={Feedback2}
                    />
                    <CardFooter className="justify-between bg-white before:bg-white border-white border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex items-center">
                        <div className="h-20 overflow-auto py-1 text-center">
                            Сәлеметсіздер ме! Менің есімім Мадияр. Мен iRocket сайты
                            арқылы аналитика жасап жүргеніме біраз уақыт болды.Бұл
                            аналитика жасау үшін ыңғайлы сайт, барлық беретін
                            информация 100% нақты көрсетеді және маған өз
                            продажаларымды өсіруге көмектесті. Барлықтарыңызға кеңес
                            беремін!
                        </div>
                    </CardFooter>
                </Card>
                <Card isFooterBlurred radius="lg" className="border-none mx-auto flex flex-col items-center w-full max-w-xs">
                    <Image
                        alt="Feedback-3"
                        className="object-cover"
                        src={Feedback3}
                    />
                    <CardFooter className="justify-between bg-white before:bg-white border-white border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 flex items-center">
                        <div className="h-14 overflow-auto py-1 text-center">
                            Irocket самый точный и быстрый сервис в Казахстане.
                            Рекомендую!
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
