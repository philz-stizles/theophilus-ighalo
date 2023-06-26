import { Container } from '../layout';

const AboutMe = () => {
  return (
    <section id="about-me" className=" py-16">
      <Container>
        <h2 className="uppercase text-3xl font-extrabold text-center mb-12">
          About me
        </h2>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-6">
            <h3 className="uppercase text-2xl">
              Who <strong>am i</strong>?
            </h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel,
              sint nisi possimus sunt veritatis totam velit, esse pariatur in
              minima nostrum harum dolorum perferendis quasi dolor autem
              deleniti inventore.
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel,
              sint nisi possimus sunt veritatis totam velit, esse pariatur in
              minima nostrum harum dolorum perferendis quasi dolor autem
              deleniti inventore.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="uppercase text-2xl">Core Skills</h3>
            <p className="text-sm">
              Poin dui orci, pretium eget fringilla sit amet, luctus a nisl.
              Praesent tristique scelerisque sapien at aliquet.
            </p>
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="uppercase text-sm font-black mb-1">React js</h4>
                <div className="relative h-1 w-full bg-gray-300 transition">
                  <div className="absolute top-0 left-0 bottom-0 bg-black w-6/12"></div>
                </div>
              </div>
              <div>
                <h4 className="uppercase text-sm font-black mb-1">Node js</h4>
                <div className="h-1 bg-black"></div>
              </div>
              <div>
                <h4 className="uppercase text-sm font-black mb-1">
                  Flutter | Dart
                </h4>
                <div className="h-1 bg-black"></div>
              </div>
              <div>
                <h4 className="uppercase text-sm font-black mb-1">AWS</h4>
                <div className="relative h-1 w-full bg-gray-300 transition">
                  <div className="absolute top-0 left-0 bottom-0 bg-black w-6/12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
