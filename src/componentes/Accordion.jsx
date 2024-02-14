import AcordeonItem from './AccordionItem';

//En esta función añadimos la información que se encuentra en el archivo data.js
function Acordeon({ data }) {
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AcordeonItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

export default Acordeon;
