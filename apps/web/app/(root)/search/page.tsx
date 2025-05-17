"use client";
import React, { useState } from "react";
import {
  Card,
  Col,
  Row,
  Button,
  Input,
  Select,
  Slider,
  Checkbox,
  Badge,
} from "antd";
import {
  HeartOutlined,
  SearchOutlined,
  FilterOutlined,
} from "@ant-design/icons";

const { Option } = Select;

const mockProfiles = [
  {
    id: 1,
    name: "Padmini Rathore",
    age: 27,
    location: "Jaipur, Rajasthan",
    subcaste: "Rathore",
    profession: "Marketing Manager",
    education: "MBA",
    image:
      "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    compatibility: 92,
  },
  {
    id: 2,
    name: "Kanishka Chauhan",
    age: 25,
    location: "Udaipur, Rajasthan",
    subcaste: "Chauhan",
    profession: "Doctor",
    education: "MBBS, MD",
    image:
      "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    compatibility: 88,
  },
  {
    id: 3,
    name: "Meenakshi Sisodia",
    age: 26,
    location: "Delhi",
    subcaste: "Sisodia",
    profession: "Software Engineer",
    education: "B.Tech",
    image:
      "https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    compatibility: 85,
  },
  {
    id: 4,
    name: "Divya Shekhawat",
    age: 28,
    location: "Mumbai, Maharashtra",
    subcaste: "Shekhawat",
    profession: "Chartered Accountant",
    education: "CA",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    compatibility: 79,
  },
  {
    id: 5,
    name: "Jyoti Bhati",
    age: 24,
    location: "Jodhpur, Rajasthan",
    subcaste: "Bhati",
    profession: "Fashion Designer",
    education: "B.Des",
    image:
      "https://images.unsplash.com/photo-1621784563330-caee0b138a00?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    compatibility: 83,
  },
  {
    id: 6,
    name: "Anjali Rathore",
    age: 27,
    location: "Ahmedabad, Gujarat",
    subcaste: "Rathore",
    profession: "Teacher",
    education: "M.Ed",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    compatibility: 76,
  },
  {
    id: 7,
    name: "Priya Chauhan",
    age: 26,
    location: "Chandigarh",
    subcaste: "Chauhan",
    profession: "HR Manager",
    education: "MBA",
    image:
      "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    compatibility: 81,
  },
  {
    id: 8,
    name: "Kavita Shekhawat",
    age: 29,
    location: "Lucknow, UP",
    subcaste: "Shekhawat",
    profession: "Bank Manager",
    education: "MBA Finance",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    compatibility: 72,
  },
];

const Page = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [ageRange, setAgeRange] = useState([18, 40]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSendRequest = (profileId: number) => {
    console.log("Send request to profile:", profileId);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow  pb-12 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Filter Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between md:justify-start mb-4">
              <h2 className="text-xl font-semibold">Search Filters</h2>
              <Button
                icon={<FilterOutlined />}
                className="md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                {showFilters ? "Hide Filters" : "Show Filters"}
              </Button>
            </div>

            {showFilters && (
              <Card className="shadow-sm">
                <Row gutter={[16, 16]}>
                  <Col xs={24} md={6}>
                    <Input
                      prefix={<SearchOutlined />}
                      placeholder="Search by name, location..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </Col>
                  <Col xs={24} md={6}>
                    <span className="block mb-1">
                      Age Range: {ageRange[0]} - {ageRange[1]}
                    </span>
                    <Slider
                      range
                      min={18}
                      max={60}
                      value={ageRange}
                      onChange={setAgeRange}
                    />
                  </Col>
                  <Col xs={24} md={6}>
                    <span className="block mb-1">Location</span>
                    <Select defaultValue="any" className="w-full">
                      <Option value="any">Any Location</Option>
                      <Option value="rajasthan">Rajasthan</Option>
                      <Option value="delhi">Delhi</Option>
                      <Option value="mumbai">Mumbai</Option>
                      <Option value="gujarat">Gujarat</Option>
                      <Option value="uttarpradesh">Uttar Pradesh</Option>
                    </Select>
                  </Col>
                  <Col xs={24} md={6}>
                    <span className="block mb-1">Sub-Caste</span>
                    <Checkbox.Group style={{ width: "100%" }}>
                      <Row>
                        {[
                          "rathore",
                          "chauhan",
                          "sisodia",
                          "bhati",
                          "shekhawat",
                        ].map((val) => (
                          <Col span={12} key={val}>
                            <Checkbox value={val}>
                              {val.charAt(0).toUpperCase() + val.slice(1)}
                            </Checkbox>
                          </Col>
                        ))}
                      </Row>
                    </Checkbox.Group>
                  </Col>
                  <Col xs={24} md={6}>
                    <span className="block mb-1">Education</span>
                    <Select defaultValue="any" className="w-full">
                      <Option value="any">Any Education</Option>
                      <Option value="bachelors">Bachelor's Degree</Option>
                      <Option value="masters">Master's Degree</Option>
                      <Option value="phd">PhD / Doctorate</Option>
                    </Select>
                  </Col>
                  <Col xs={24} md={6}>
                    <span className="block mb-1">Marital Status</span>
                    <Select defaultValue="any" className="w-full">
                      <Option value="any">Any Status</Option>
                      <Option value="never_married">Never Married</Option>
                      <Option value="divorced">Divorced</Option>
                      <Option value="widowed">Widowed</Option>
                    </Select>
                  </Col>
                  <Col xs={24} md={12} className="flex gap-4 mt-4">
                    <Button type="primary" className="w-full">
                      Apply Filters
                    </Button>
                    <Button
                      className="w-full"
                      onClick={() => window.location.reload()}
                    >
                      Reset
                    </Button>
                  </Col>
                </Row>
              </Card>
            )}
          </div>

          {/* Profiles Section */}
          <Row gutter={[16, 16]}>
            {mockProfiles.length > 0 ? (
              mockProfiles.map((profile) => (
                <Col key={profile.id} xs={24} sm={12} md={8} lg={6}>
                  <Card
                    hoverable
                    cover={<img alt={profile.name} src={profile.image} />}
                    actions={[
                      <Button
                        type="primary"
                        icon={<HeartOutlined />}
                        onClick={() => handleSendRequest(profile.id)}
                      >
                        Connect
                      </Button>,
                    ]}
                  >
                    <Card.Meta
                      title={`${profile.name}, ${profile.age}`}
                      description={
                        <>
                          <div>{profile.location}</div>
                          <div>
                            {profile.education}, {profile.profession}
                          </div>
                          <div className="mt-2">
                            <Badge
                              count={`${profile.compatibility}%`}
                              style={{ backgroundColor: "#52c41a" }}
                            />
                          </div>
                        </>
                      }
                    />
                  </Card>
                </Col>
              ))
            ) : (
              <Col span={24} className="text-center py-10">
                <p className="text-gray-500">
                  No profiles found. Try adjusting your filters.
                </p>
              </Col>
            )}
          </Row>
        </div>
      </main>
    </div>
  );
};

export default Page;
