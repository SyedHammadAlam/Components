const BrightCardsLayout = () => {
  return (
    <div className="bg-gray-100 p-10 text-gray-800 space-y-8">
      <div className="flex gap-4">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold">Card 1</h2>
          <p className="mt-2">This is Karachi</p>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold">Card 2</h2>
          <p className="mt-2">This is Lahore</p>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold">Card 3</h2>
          <p className="mt-2">This is Peshawar</p>
        </div>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold">Card 4</h2>
          <p className="mt-2">This is Islamabad</p>
        </div>
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold">Card 5</h2>
          <p className="mt-2">This is Quetta</p>
        </div>
      </div>
    </div>
  );
};

export default BrightCardsLayout;
