/* 4. React - listy */

/* ! Warninig: Each child in a list should have a unique "key" prop. 
Check the render method of `PeopleList`. */

type Person = {
  id: string;
  name: string;
  age: number;
};

const data: Array<Person> = [
  {
    id: "1d13e294-b68e-434d-b1d1-5ec0c2359ff5",
    name: "Mark",
    age: 34
  },
  {
    id: "58cb6c57-1569-418d-8b59-544eb35aabe9",
    name: "Eve",
    age: 29
  }
];

const PeopleList: React.FC = () => {
  return (
    <section id="people-list">
      {data.map((person) => (
        <div id="person-info-container">
          <span>{`Name: ${person.name}`}</span>
          <span>{`Age: ${person.age}`}</span>
        </div>
      ))}
    </section>
  );
};

export default PeopleList;
