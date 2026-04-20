import Typewriter from 'typewriter-effect';

function TypewriterEffect() {
  return (
    <div className="text-secondary font-bold">
      <Typewriter
        options={{
          strings: ['MERN Stack Developer','Frontend Developer', 'React Developer','Node JS Developer'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export { TypewriterEffect };
