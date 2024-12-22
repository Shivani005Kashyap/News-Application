
import React from 'react';
import NewsItem from './NewsItems';

export default function News() {
  return (
    <div className="container my-3">
      <h1 className="text-center">NewsZone- Top News Headlines</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
            <NewsItem />
          </div>
          <div className="col-md-4">
          </div>
        </div>
      </div>
    </div >
  );
}
