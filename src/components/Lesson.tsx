import { CheckCircle, Lock } from 'phosphor-react';
import { format, isPast } from 'date-fns';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
  const { slug } = useParams<{slug: string}>();
  const isLessonAvailable = isPast(props.availableAt);
  const availableAtFormatted = format(props.availableAt, "EEEE' • 'MMMM do' • 'hh' 'a");
  
  const isActiveLesson = slug === props.slug;
  

  return (
    <Link to={`/event/lesson/${props.slug}`} className='group'>
      <span className="text-gray-300">
        {availableAtFormatted}
      </span>

      <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors',{
        "bg-green-500": isActiveLesson,
      })}>
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className={classNames("text-sm font-medium flex items-center gap-2", {
               "text-white": isActiveLesson,
               "text-blue-500": !isActiveLesson,
            })}>
              <CheckCircle size={20} />
              Content delivered
          </span>
          ): (
            <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
              <Lock size={20} />
              Soon
          </span>
          )}
          <span className={classNames("text-xs rounded py-[0.125rem] px-2 text-white border font-bold", {
            "border-green-300": !isActiveLesson,
            "border-white": isActiveLesson,
          })}>
            {props.type === 'live' ? 'LIVE' : 'Practice class'}
          </span>
        </header>
        <strong className={classNames("mt-5 block", {
          "text-white": isActiveLesson,
          "text-gray-200": !isActiveLesson,
        })}>
          {props.title}
        </strong>
      </div>
    </Link>
  )
}