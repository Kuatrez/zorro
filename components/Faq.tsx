import { useState, FC } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const data: FaqItem[] = [
  {
    question: "С какого возраста к вам можно? ",
    answer:
      "С любого, главное присутствие родителей если ребенок младше 16 лет. С 16 до 18 лет достаточно письменного согласия родителей.",
  },
  {
    question: "Сертификат именной?",
    answer: "Нет, ваши данные уточняются для нашей внутренней системы.",
  },
  {
    question: "Оплата на месте возможна картой?",
    answer: "Да.",
  },
  {
    question: "Выдадут ли защитный костюм?",
    answer:
      "Да. шлем, который полностью закрывает лицо, перчатки и куртки (по необходимости штаны).",
  },
  {
    question: "Чем крушить?",
    answer: "Биты, кувадлы, лом, молоток.",
  },
  {
    question: "Если я хочу прийти один?",
    answer:
      "Вы можете прийти один на любой тариф по своему желанию и бюджету. Цена фиксированная за тариф.",
  },
];

const Faq: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="container mx-auto p-4">
      <h2 className="text-center text-xl font-bold mb-10 sm:text-4xl sm:mb-20">
        Ответы на популярные вопросы
      </h2>
      <div className="space-y-6">
        {data.map((item, index) => (
          <div key={index} className="rounded-xl bg-black/10">
            <button
              className="w-full text-left p-4 font-semibold rounded-xl cursor-pointer flex justify-between items-center"
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
