import { useLoaderData } from "react-router";

const FoodDetailsPage = () => {
  const data = useLoaderData();
  console.log(data.foodImage);
  const {
    foodImage,
    category,
    foodTitle,
    description,
    expiryDate,
    addedDate,
    userEmail,
    quantity,
  } = data;

  return (
    <div className="bg-gray-50 py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg bg-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Food Image */}
            <div className="flex items-center justify-center p-4">
              <img
                src={foodImage}
                alt={foodTitle}
                className="h-auto w-full max-w-md rounded-lg object-cover"
              />
            </div>

            {/* Food Information */}
            <div className="flex flex-col justify-center p-8">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                {foodTitle}
              </h1>
              <p className="mt-2 text-lg font-medium text-teal-600">
                {category}
              </p>

              <p className="mt-6 text-base text-gray-700">{description}</p>

              <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                <div className="rounded-md bg-gray-100 p-4">
                  <p className="text-sm font-medium text-gray-500">Quantity</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {quantity}
                  </p>
                </div>
                <div className="rounded-md bg-gray-100 p-4">
                  <p className="text-sm font-medium text-gray-500">
                    Expiry Date
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    {expiryDate}
                  </p>
                </div>
                <div className="rounded-md bg-gray-100 p-4">
                  <p className="text-sm font-medium text-gray-500">Added On</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {addedDate}
                  </p>
                </div>
                <div className="rounded-md bg-gray-100 p-4">
                  <p className="text-sm font-medium text-gray-500">Added By</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {userEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsPage;
