"use client";
import React, { useState } from "react";
import {
  Card,
  Typography,
  Row,
  Col,
  Button,
  Tag,
  Input,
  Select,
  Pagination,
} from "antd";
import {
  ReadOutlined,
  CalendarOutlined,
  UserOutlined,
  SearchOutlined,
  HeartOutlined,
  CrownOutlined,
  HomeOutlined,
  StarOutlined,
  GiftOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const BlogsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const blogsPerPage = 6;

  const blogData = [
    {
      id: 1,
      title: "Traditional Rajput Wedding Ceremonies: A Complete Guide",
      excerpt:
        "Discover the rich traditions and rituals that make Rajput weddings truly magnificent. From pre-wedding ceremonies to the grand celebration, learn about each ritual's significance.",
      content:
        "Rajput weddings are steeped in tradition and grandeur, reflecting the royal heritage of our community. Each ceremony holds deep cultural significance...",
      author: "Rajmata Sunita Devi",
      date: "2025-06-15",
      category: "traditions",
      image: "/api/placeholder/400/250",
      readTime: "8 min read",
      tags: ["Wedding", "Traditions", "Rituals", "Culture"],
    },
    {
      id: 2,
      title: "Finding Your Perfect Match: Modern Approach to Rajput Matrimony",
      excerpt:
        "Balancing traditional values with modern compatibility factors. Learn how to find a life partner who shares your cultural heritage and personal aspirations.",
      content:
        "In today's world, finding the right life partner requires balancing our rich cultural heritage with modern compatibility factors...",
      author: "Dr. Vikram Singh Rathore",
      date: "2025-06-12",
      category: "relationships",
      image: "/api/placeholder/400/250",
      readTime: "6 min read",
      tags: ["Marriage", "Compatibility", "Modern", "Values"],
    },
    {
      id: 3,
      title: "The Significance of Horoscope Matching in Rajput Culture",
      excerpt:
        "Understanding the ancient practice of Kundli matching and its importance in Rajput matrimonial alliances. Learn about the key factors astrologers consider.",
      content:
        "Horoscope matching, or Kundli Milan, has been an integral part of Rajput matrimonial traditions for centuries...",
      author: "Pandit Mohan Lal Sharma",
      date: "2025-06-10",
      category: "astrology",
      image: "/api/placeholder/400/250",
      readTime: "10 min read",
      tags: ["Horoscope", "Astrology", "Kundli", "Matching"],
    },
    {
      id: 4,
      title: "Rajput Cuisine for Wedding Celebrations",
      excerpt:
        "Explore the royal flavors that grace Rajput wedding feasts. From traditional Dal Baati to royal sweets, discover recipes passed down through generations.",
      content:
        "Rajput cuisine reflects the royal heritage and warrior spirit of our community. Wedding celebrations are incomplete without these traditional delicacies...",
      author: "Chef Maharani Padmini",
      date: "2025-06-08",
      category: "culture",
      image: "/api/placeholder/400/250",
      readTime: "7 min read",
      tags: ["Food", "Wedding", "Recipes", "Royal"],
    },
    {
      id: 5,
      title: "Navigating Family Expectations in Rajput Marriages",
      excerpt:
        "Understanding the role of family in Rajput matrimonial decisions. Tips for open communication and finding harmony between personal choice and family wisdom.",
      content:
        "Family plays a crucial role in Rajput matrimonial decisions, and navigating expectations while maintaining personal autonomy requires wisdom...",
      author: "Counselor Rani Meera Singh",
      date: "2025-06-05",
      category: "relationships",
      image: "/api/placeholder/400/250",
      readTime: "9 min read",
      tags: ["Family", "Communication", "Expectations", "Harmony"],
    },
    {
      id: 6,
      title: "Royal Attire: Traditional Rajput Wedding Dress Guide",
      excerpt:
        "From the bride's lehenga to the groom's sherwani, explore the magnificent traditional attire that makes Rajput weddings a visual spectacle.",
      content:
        "Rajput wedding attire reflects the royal heritage and cultural richness of our community. Each piece tells a story of tradition and elegance...",
      author: "Designer Rajkumari Priya",
      date: "2025-06-03",
      category: "fashion",
      image: "/api/placeholder/400/250",
      readTime: "5 min read",
      tags: ["Fashion", "Wedding", "Traditional", "Attire"],
    },
    {
      id: 7,
      title: "Building Strong Foundations: Pre-Marriage Counseling",
      excerpt:
        "The importance of pre-marriage counseling in ensuring a successful union. Learn about communication, expectations, and building a strong foundation.",
      content:
        "Pre-marriage counseling has become increasingly important in modern Rajput marriages, helping couples build strong foundations...",
      author: "Dr. Harsh Vardhan Singh",
      date: "2025-06-01",
      category: "relationships",
      image: "/api/placeholder/400/250",
      readTime: "8 min read",
      tags: ["Counseling", "Marriage", "Foundation", "Communication"],
    },
    {
      id: 8,
      title: "Preserving Heritage: Teaching Rajput Values to Children",
      excerpt:
        "How married couples can ensure their children understand and appreciate their Rajput heritage while adapting to modern times.",
      content:
        "Preserving our rich Rajput heritage for future generations requires conscious effort and thoughtful approach...",
      author: "Educator Kunwar Ajay Singh",
      date: "2025-05-28",
      category: "culture",
      image: "/api/placeholder/400/250",
      readTime: "6 min read",
      tags: ["Heritage", "Children", "Values", "Culture"],
    },
    {
      id: 9,
      title: "Digital Age Courtship: Online Dating in Rajput Community",
      excerpt:
        "How technology is changing the way Rajput families find suitable matches while maintaining cultural values and traditional processes.",
      content:
        "The digital age has transformed how Rajput families approach matrimonial searches, blending technology with tradition...",
      author: "Tech Expert Rajesh Kumar",
      date: "2025-05-25",
      category: "modern",
      image: "/api/placeholder/400/250",
      readTime: "7 min read",
      tags: ["Technology", "Online", "Modern", "Digital"],
    },
  ];

  const categories = [
    { value: "all", label: "All Categories", icon: <ReadOutlined /> },
    { value: "traditions", label: "Traditions", icon: <CrownOutlined /> },
    { value: "relationships", label: "Relationships", icon: <HeartOutlined /> },
    { value: "culture", label: "Culture", icon: <HomeOutlined /> },
    { value: "astrology", label: "Astrology", icon: <StarOutlined /> },
    { value: "fashion", label: "Fashion", icon: <GiftOutlined /> },
    { value: "modern", label: "Modern", icon: <TeamOutlined /> },
  ];

  const filteredBlogs = blogData.filter((blog) => {
    const matchesCategory =
      selectedCategory === "all" || blog.category === selectedCategory;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const getCategoryColor = (category) => {
    const colors = {
      traditions: "red",
      relationships: "pink",
      culture: "orange",
      astrology: "purple",
      fashion: "magenta",
      modern: "blue",
    };
    return colors[category] || "default";
  };

  const handleReadMore = (blogId) => {
    console.log(`Reading blog ${blogId}`);
    // In a real app, this would navigate to the full blog post
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50 px-10">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-800 to-red-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <ReadOutlined className="text-6xl text-yellow-400 mb-4" />
          <Title
            level={1}
            className="text-white mb-4 text-4xl md:text-6xl font-bold"
          >
            Rajput Heritage Blog
          </Title>
          <Paragraph className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Discover insights, traditions, and wisdom from our rich Rajput
            culture. Stories that connect hearts and preserve heritage.
          </Paragraph>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8">
          <Row gutter={[16, 16]} className="mb-6">
            <Col xs={24} md={12}>
              <Search
                placeholder="Search blogs..."
                allowClear
                size="large"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </Col>
            <Col xs={24} md={12}>
              <Select
                size="large"
                value={selectedCategory}
                onChange={setSelectedCategory}
                className="w-full"
                placeholder="Select Category"
              >
                {categories.map((cat) => (
                  <Option key={cat.value} value={cat.value}>
                    <span className="flex items-center">
                      {cat.icon}
                      <span className="ml-2">{cat.label}</span>
                    </span>
                  </Option>
                ))}
              </Select>
            </Col>
          </Row>

          {/* Category Tags */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Tag
                key={cat.value}
                className={`cursor-pointer transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? "bg-red-800 text-white border-red-800"
                    : "hover:bg-red-100 hover:border-red-300"
                }`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.icon}
                <span className="ml-1">{cat.label}</span>
              </Tag>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          <Text className="text-gray-600">
            Showing {currentBlogs.length} of {filteredBlogs.length} blogs
            {selectedCategory !== "all" &&
              ` in ${categories.find((c) => c.value === selectedCategory)?.label}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </Text>
        </div>

        {/* Blog Cards Grid */}
        <Row gutter={[24, 24]} className="mb-8">
          {currentBlogs.map((blog) => (
            <Col xs={24} md={12} lg={8} key={blog.id}>
              <Card
                className="h-full shadow-lg hover:shadow-xl transition-all duration-300 border-yellow-200 hover:border-red-300"
                cover={
                  <div className="h-48 bg-gradient-to-r from-red-100 to-yellow-100 flex items-center justify-center">
                    <ReadOutlined className="text-4xl text-red-300" />
                  </div>
                }
                actions={[
                  <Button
                    type="primary"
                    className="bg-red-800 hover:bg-red-700 border-red-800 hover:border-red-700 text-white"
                    onClick={() => handleReadMore(blog.id)}
                  >
                    Read More
                  </Button>,
                ]}
              >
                <div className="mb-3">
                  <Tag color={getCategoryColor(blog.category)} className="mb-2">
                    {categories.find((c) => c.value === blog.category)?.label}
                  </Tag>
                  <div className="flex items-center text-gray-500 text-sm space-x-4">
                    <span className="flex items-center">
                      <CalendarOutlined className="mr-1" />
                      {new Date(blog.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center">
                      <UserOutlined className="mr-1" />
                      {blog.readTime}
                    </span>
                  </div>
                </div>

                <Title level={4} className="text-red-800 mb-3 line-clamp-2">
                  {blog.title}
                </Title>

                <Paragraph className="text-gray-700 mb-4 line-clamp-3">
                  {blog.excerpt}
                </Paragraph>

                <div className="flex flex-wrap gap-1 mb-3">
                  {blog.tags.slice(0, 3).map((tag) => (
                    <Tag key={tag} size="small" className="text-xs">
                      {tag}
                    </Tag>
                  ))}
                </div>

                <div className="flex items-center text-gray-500 text-sm">
                  <UserOutlined className="mr-1" />
                  <Text className="text-gray-600">{blog.author}</Text>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        {/* No Results Message */}
        {currentBlogs.length === 0 && (
          <div className="text-center py-12">
            <SearchOutlined className="text-6xl text-gray-300 mb-4" />
            <Title level={3} className="text-gray-500 mb-2">
              No blogs found
            </Title>
            <Paragraph className="text-gray-400">
              Try adjusting your search terms or category filter
            </Paragraph>
            <Button
              type="primary"
              className="bg-red-800 hover:bg-red-700 border-red-800"
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Pagination */}
        {filteredBlogs.length > blogsPerPage && (
          <div className="flex justify-center mt-8">
            <Pagination
              current={currentPage}
              total={filteredBlogs.length}
              pageSize={blogsPerPage}
              onChange={setCurrentPage}
              showSizeChanger={false}
              showQuickJumper
              showTotal={(total, range) =>
                `${range[0]}-${range[1]} of ${total} blogs`
              }
              className="custom-pagination"
            />
          </div>
        )}

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-red-800 to-red-900 text-white p-8 rounded-lg shadow-lg mt-12">
          <div className="text-center">
            <Title level={3} className="text-white mb-4">
              Stay Updated with Our Latest Blogs
            </Title>
            <Paragraph className="text-yellow-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss insights about Rajput
              culture, matrimonial wisdom, and community stories.
            </Paragraph>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                size="large"
                className="flex-1"
              />
              <Button
                type="primary"
                size="large"
                className="bg-yellow-500 hover:bg-yellow-400 text-red-900 border-yellow-500 hover:border-yellow-400 font-semibold"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
