const HeroBannerImage = ({handleCoinClick}) => {
  return (
    <div className="mt-8">
      <div
        className={`h-auto bg-[#131313] bg-[url('../../../public/assets/bg-shadow.png')] bg-cover bg-center flex justify-center items-center rounded-3xl`}
      >
        <div className="text-center">
          <img
            src="/assets/banner-main.png"
            alt="banner image"
            className="mx-auto w-fit mt-24"
          />
          <h1 className="heroBannerHedding pt-10 pb-6">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <h4 className="heroBannerSmallHedding">
            Beyond Boundaries Beyond Limits
          </h4>
          <button
            className="btn glass wide bg-[rgb(231,254,41)] mt-4 mb-32"
            onClick={handleCoinClick}
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerImage;
