import Image from 'next/image';

import question from '@/public/question.jpg';

import Question from './Question';
import { ptsans } from '@/fonts';

export const Questions = () => {
  const content = [
    {
      title: 'What is Balakun?',
      text: '  Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name «Balakun» is Ukrainian for «Chatterbox,» representing the essence of our initiative – to foster meaningful conversations and build connections.',
    },
    {
      title: 'Who can join Balakun as amentor?',
      text: '  Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name «Balakun» is Ukrainian for «Chatterbox,» representing the essence of our initiative – to foster meaningful conversations and build connections.',
    },
    {
      title: 'Is Balakun a non-profit org?',
      text: '  Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name «Balakun» is Ukrainian for «Chatterbox,» representing the essence of our initiative – to foster meaningful conversations and build connections.',
    },
    {
      title: 'Where is Balakun`s HQ?',
      text: '  Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name «Balakun» is Ukrainian for «Chatterbox,» representing the essence of our initiative – to foster meaningful conversations and build connections.',
    },
    {
      title: 'Why volunteer at Balakun?',
      text: '  Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name «Balakun» is Ukrainian for «Chatterbox,» representing the essence of our initiative – to foster meaningful conversations and build connections.',
    },
    {
      title: 'How can I become a mentor?',
      text: '  Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name «Balakun» is Ukrainian for «Chatterbox,» representing the essence of our initiative – to foster meaningful conversations and build connections.',
    },
    {
      title: 'How can I become a student?',
      text: '  Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name «Balakun» is Ukrainian for «Chatterbox,» representing the essence of our initiative – to foster meaningful conversations and build connections.',
    },
    {
      title: 'How can I know about the status of my application?',
      text: '  Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name «Balakun» is Ukrainian for «Chatterbox,» representing the essence of our initiative – to foster meaningful conversations and build connections.',
    },
    {
      title: 'How can I contact Balakun?',
      text: '  Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name «Balakun» is Ukrainian for «Chatterbox,» representing the essence of our initiative – to foster meaningful conversations and build connections.',
    },
    {
      title: 'I want to become a Balakun partner. Whom can I contact?',
      text: '  Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name «Balakun» is Ukrainian for «Chatterbox,» representing the essence of our initiative – to foster meaningful conversations and build connections.',
    },
    {
      title: "I can't be a mentor, but I wish to support. What can I do?",
      text: '  Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name «Balakun» is Ukrainian for «Chatterbox,» representing the essence of our initiative – to foster meaningful conversations and build connections.',
    },
    {
      title: 'I am already a mentor and I have a question and/or idea about the teaching materials. Who can I contact?',
      text: '  Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name «Balakun» is Ukrainian for «Chatterbox,» representing the essence of our initiative – to foster meaningful conversations and build connections.',
    },
    {
      title: 'How do I start a group lesson?',
      text: '  Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name «Balakun» is Ukrainian for «Chatterbox,» representing the essence of our initiative – to foster meaningful conversations and build connections.',
    },
    {
      title:
        'My availability to provide lessons has changed and I need another mentor to take over. Who can I contact?',
      text: '  Balakun is a bridge between passionate volunteer mentors from around the world and Ukrainians eager to learn or practice English. Our name «Balakun» is Ukrainian for «Chatterbox,» representing the essence of our initiative – to foster meaningful conversations and build connections.',
    },
  ];

  return (
    <div className="flex w-full justify-center">
      <article className="max-w-[1500px] mb-[194px]">
        <h1 className={`${ptsans.variable} pb-8 font-ptsans text-left fo text-4xl font-bold tracking-normal`}>
          Frequently Asked <span className="text-red-600">Questions</span>
        </h1>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 xl:gap-16">
          <div className=" flex flex-col gap-3 rounded-[48px] border border-red-500 p-4 md:gap-6 md:p-8">
            {content.map((item, index) => {
              return <Question item={item} key={index} />;
            })}
          </div>
          <div className="hidden h-[564px] lg:block">
            <Image
              width={926}
              height={520}
              src={question}
              alt="question mark"
              className="h-full w-full rounded-[48px] object-cover"
            />
          </div>
        </div>
      </article>
    </div>
  );
};
