import { Container, Section } from '@/components/layout';
import { Button, SectionHeader } from '@/components/ui';
import Input from '@/components/ui/input/input';

const Contact = () => {
  return (
    <Section id="contact">
      <Container>
        <SectionHeader title="Send Me a Message" />
        <div>
          <form className="">
            <div className="flex gap-5">
              <Input placeholder="Name" />
              <Input placeholder="Email" />
            </div>
            <Input placeholder="Subject" />
            <Input placeholder="Message" textarea />
            <Button label="Send" />
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
