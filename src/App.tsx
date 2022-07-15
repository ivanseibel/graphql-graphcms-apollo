import { gql, useQuery } from "@apollo/client";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
        bio
      }
    }
  }
`;

interface Lesson {
  id: string;
  title: string;
  teacher: {
    name: string;
    bio: string;
  };
};

function App() {
  const { data  } = useQuery<{lessons: Lesson[]}>(GET_LESSONS_QUERY);

  console.log(data);

  return (
    <ul>
      {data?.lessons.map(lesson => (
        <li key={lesson.id}>{lesson.title}</li>
      ))}
    </ul>
  )
}

export default App
