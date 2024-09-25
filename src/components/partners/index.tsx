import  { useEffect, useState } from 'react';
import { Payment, columns } from './columns';
import { DataTable } from './data-table';

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com"
    },
    {
      id: "a1b2c3d4",
      amount: 150,
      status: "success",
      email: "user1@example.com"
    },
    {
      id: "e5f6g7h8",
      amount: 200,
      status: "failed",
      email: "user2@example.com"
    },
    {
      id: "i9j0k1l2",
      amount: 250,
      status: "pending",
      email: "user3@example.com"
    },
    {
      id: "m3n4o5p6",
      amount: 300,
      status: "success",
      email: "user4@example.com"
    },
    {
      id: "q7r8s9t0",
      amount: 350,
      status: "failed",
      email: "user5@example.com"
    },
    {
      id: "u1v2w3x4",
      amount: 400,
      status: "pending",
      email: "user6@example.com"
    },
    {
      id: "y5z6a7b8",
      amount: 450,
      status: "success",
      email: "user7@example.com"
    },
    {
      id: "c9d0e1f2",
      amount: 500,
      status: "failed",
      email: "user8@example.com"
    },
    {
      id: "g3h4i5j6",
      amount: 550,
      status: "pending",
      email: "user9@example.com"
    },
    {
      id: "k7l8m9n0",
      amount: 600,
      status: "success",
      email: "user10@example.com"
    },
    {
      id: "o1p2q3r4",
      amount: 650,
      status: "failed",
      email: "user11@example.com"
    },
    {
      id: "s5t6u7v8",
      amount: 700,
      status: "processing",
      email: "user12@example.com"
    },
    {
      id: "w9x0y1z2",
      amount: 750,
      status: "success",
      email: "user13@example.com"
    },
    {
      id: "a3b4c5d6",
      amount: 800,
      status: "failed",
      email: "user14@example.com"
    },
    {
      id: "e7f8g9h0",
      amount: 850,
      status: "pending",
      email: "user15@example.com"
    },
    {
      id: "i1j2k3l4",
      amount: 900,
      status: "success",
      email: "user16@example.com"
    },
    {
      id: "m5n6o7p8",
      amount: 950,
      status: "failed",
      email: "user17@example.com"
    },
    {
      id: "q1r2s3t4",
      amount: 1000,
      status: "pending",
      email: "user18@example.com"
    },
    {
      id: "u5v6w7x8",
      amount: 1050,
      status: "success",
      email: "user19@example.com"
    },
    {
      id: "y1z2a3b4",
      amount: 1100,
      status: "failed",
      email: "user20@example.com"
    }
  ];
}

const DemoPage = () => {
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default DemoPage;