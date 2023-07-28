import { Container } from '..';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer>
      <Container></Container>
      <hr />
      <div className="border-t border-slate-300 flex justify-center items-center py-8">
        <p>
          Copyright &copy; | {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
