import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyChild"));

const LazyParent = () => {
  return (
    <div>
      <h4>Lazy Loading Example</h4>
      <Suspense fallback={<div> Loading ....</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default LazyParent;
