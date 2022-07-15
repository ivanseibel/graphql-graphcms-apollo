import { gql, useQuery } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      lessonType
      availableAt
      title
      slug
    }
  }
`;

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    lessonType: 'live' | 'class';
    availableAt: Date;
    title: string;
    slug: string;
  }[]
};

export function Sidebar() {
  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY);
  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-x-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Lessons schedule
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map((lesson) => (
          <Lesson 
            key={lesson.id}
            availableAt={new Date(lesson.availableAt)} 
            slug={lesson.slug} 
            title={lesson.title} 
            type={lesson.lessonType} 
          />
        ))}  
      </div>
    </aside>
  )
  }