import { useState, FC } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const data: FaqItem[] = [
  {
    question: "Какие виды работ вы выполняете?",
    answer:
      "Мы специализируемся на полном цикле дорожно-строительных работ: от подготовки основания и укладки асфальта до благоустройства территории. Также предоставляем услуги по строительству временных дорог, подъездных путей и парковок.",
  },
  {
    question:
      "Работаете ли вы с частными заказами или только с юридическими лицами?",
    answer:
      "Мы сотрудничаем как с юридическими, так и с частными клиентами. Будь то дачный подъезд или корпоративный проект — подходим индивидуально и учитываем все пожелания.",
  },
  {
    question: "Есть ли у вас собственная техника и материалы?",
    answer:
      "Да, у нас в наличии собственный автопарк спецтехники и склад с сыпучими материалами (щебень, песок, асфальтовая крошка и др.). Это позволяет оперативно выполнять заказы и контролировать качество на всех этапах.",
  },
  {
    question: "От чего зависит стоимость дорожных работ?",
    answer:
      "Стоимость зависит от объёма, типа покрытия, удалённости объекта и особенностей участка. Мы всегда предлагаем прозрачную смету после выезда на место и бесплатной консультации.",
  },
];

const Faq: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="container mx-auto p-4 py-12">
      <div className="mb-10 sm:mb-20 flex flex-col justify-center items-center">
        <h2 className="text-center text-xl font-bold sm:text-4xl">
          Частые вопросы
        </h2>
      </div>
      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index} className="rounded-xl bg-black/5">
            <button
              className="w-full text-left p-4 rounded-xl cursor-pointer flex justify-between items-center"
              onClick={() => toggle(index)}
            >
              {item.question}
              <span className="ml-4 text-primary text-4xl">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>
            <div className="px-4 text-sm">
              {openIndex === index && (
                <div className="py-4 border-t text-left border-primary">
                  {item.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
