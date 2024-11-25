'use client';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-blue-600 text-white py-6">
        <h1 className="text-center text-4xl font-bold">About My To-Do App</h1>
      </header>

      <main className="flex-grow container mx-auto px-6 py-10">
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-4">Why I Created This App</h2>
          <p className="text-lg mb-4">
            I developed this To-Do app to improve my skills in building interactive and user-friendly applications. 
            The app is designed to help users organize their daily tasks efficiently while learning how to implement 
            features like adding, editing, completing, and deleting tasks.
          </p>

          <h2 className="text-3xl font-bold mb-4">Purpose of the App</h2>
          <p className="text-lg mb-4">
            The purpose of the app is to showcase my ability to create functional and aesthetically pleasing web applications. 
            It's a practical tool for users to manage their tasks and for me to demonstrate my understanding of Next JS, TypeScript, 
            and UI design principles.
          </p>

          <h2 className="text-3xl font-bold mb-4">How It Reflects My Skills</h2>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>
              **Next JS and TypeScript Expertise**: I used Next JS for state management and component-based design, along with TypeScript for type safety and scalability.
            </li>
            <li>
              **Dynamic and Interactive Features**: The app dynamically updates the UI with features like task completion, editing, and deletion.
            </li>
            <li>
              **Responsive Design**: The interface is built to be mobile-friendly and visually appealing.
            </li>
            <li>
              **Problem-Solving Skills**: Implementing functionality such as conditional styling, managing state, and ensuring performance shows my problem-solving capabilities.
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
