import React, { useEffect, useState } from "react";
import Layout from "../../components/Layouts/Layout";
import UserMenu from "../../components/Layouts/UserMenu";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth, setAuth] = useAuth();
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/auth/orders`
      );
      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1 className="text-center">All Orders</h1>
            {orders?.map((o, i) => {
              return (
                <div className="border-shadow">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Status</th>
                        <th scope="col">Buyer</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Payment</th>
                        <th scope="col">Quantity</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createdAt).fromNow()}</td>
                        <td>{o?.payment.Success ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        {o?.products?.map((p, i) => (
                          <div
                            key={p._id}
                            className="row card flex-row mb-2 p-3"
                          >
                            <div className="col-md-4">
                              <img
                                src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${p._id}`}
                                className="card-img-top w-75"
                                alt={p.name}
                                height={"100px"}
                              />
                            </div>
                            <div className="col-md-8">
                              <p>{p.name}</p>
                              <p>{p.description.substr(0, 30)}</p>
                              <p>Price: {p.price}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
