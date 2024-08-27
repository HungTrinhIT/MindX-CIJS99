import './SizeFilter.css';

const Size = (props) => {
  const { sizeTitle } = props;

  return <div className='size-item'>{sizeTitle}</div>;
};

const SizeFilter = () => {
  return (
    <div className='size-container'>
      <div className='size-list'>
        <Size sizeTitle='XS' />
        <Size sizeTitle='S' />
        <Size sizeTitle='M' />
        <Size sizeTitle='ML' />
        <Size sizeTitle='L' />
        <Size sizeTitle='XL' />
        <Size sizeTitle='XXL' />
      </div>
    </div>
  );
};

export default SizeFilter;
