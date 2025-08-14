import Typewriter from 'typewriter-effect';

function TypewriterEffect() {
  return (
    <div className="text-secondary font-bold">
      <Typewriter
        options={{
          strings: ['Frontend Developer', 'React Developer'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
}

export { TypewriterEffect };
