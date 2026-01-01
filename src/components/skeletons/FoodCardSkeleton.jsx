const FoodCardSkeleton = () => {
    return (
        <div className="animate-pulse rounded-2xl border border-gray-200 bg-white shadow-sm">

            {/* Image Skeleton */}
            <div className="h-48 w-full rounded-t-2xl bg-gray-200" />

            {/* Content Skeleton */}
            <div className="p-4 space-y-4">
                <div className="h-5 w-3/4 rounded bg-gray-200" />
                <div className="h-6 w-1/3 rounded bg-gray-200" />

                <div className="flex gap-3 pt-2">
                    <div className="h-10 flex-1 rounded-xl bg-gray-200" />
                    <div className="h-10 flex-1 rounded-xl bg-gray-200" />
                </div>
            </div>
        </div>
    );
};

export default FoodCardSkeleton;
