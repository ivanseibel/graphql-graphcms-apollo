import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";

import codeMockupImg from "../assets/code-mockup.png";

const CREATE_SUBSCRIBER_MUTATION = gql`
  mutation CreateSubscriber($name: String!, $email: String!) {
    createSubscriber(data: {name: $name, email: $email}) {
      id
    }
  }
`;

export function Subscribe() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();
  const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBER_MUTATION);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    createSubscriber({
      variables: {
        name,
        email,
      },
    }).then(() => {
      navigate('/event');
    }).catch(() => {
      alert('Error creating subscriber');
    });
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Build a <strong className="text-blue-500">complete application</strong> from scratch with <strong className="text-blue-500">React</strong>
          </h1>

          <p className="mt-4 text-gray-200 leading-relaxed">
            In just one week you will master in practice one of the most used technologies and with high demand to access the best opportunities on the market.
          </p>
        </div>

        <div className="w-full max-w-[360px] p-8 bg-gray-700 border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">
            Sign up for free
          </strong>

          <form 
            action="" 
            className="flex flex-col gap-2 w-full"
            onSubmit={handleSubmit}
          >
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="text" 
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input 
              className="bg-gray-900 rounded px-5 h-14"
              type="email" 
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
              type="submit"
              disabled={loading}
            >
              Secure my spot
            </button>

          </form>
        </div>

      </div>

      <img src={codeMockupImg} alt="code mockup" className="mt-10" />
    </div>
  );
}