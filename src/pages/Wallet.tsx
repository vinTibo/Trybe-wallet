import { useDispatch, useSelector } from 'react-redux';

type RootState = {
  email: string;
};

function Wallet() {
  const rootState = useSelector((state: RootState) => state);
  console.log(rootState);
  return (
    <div>
      TrybeWallet
    </div>
  );
}

export default Wallet;
