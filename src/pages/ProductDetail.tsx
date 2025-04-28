import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedSection from '@/components/AnimatedSection';

interface ProductSpec {
  name: string;
  value: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  category: string;
  woodType: string;
  imageUrl1: string;
  imageUrl2: string;
  imageUrl3: string;
  imageUrl4: string;
  thickness: string;
  finish: string;
  grade: string;
  specs: ProductSpec[];
  applications: string[];
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    setLoading(true);
    const foundProduct = productData.find(p => p.id === Number(id));
    
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.imageUrl1);
    }
    
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-12 h-12 rounded-full border-4 border-wood-light border-t-wood-dark animate-spin"></div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md p-8">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="mb-6 text-muted-foreground">
              Sorry, the product you are looking for does not exist or has been removed.
            </p>
            <Link 
              to="/products"
              className="bg-wood-dark text-white px-6 py-2 rounded hover-lift inline-flex items-center"
            >
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Products
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const productImages = [
    { id: 1, url: product.imageUrl1 },
    { id: 2, url: product.imageUrl2 },
    { id: 3, url: product.imageUrl3 },
    { id: 4, url: product.imageUrl4 }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-earth-beige/50 py-4">
        <div className="container mx-auto px-4">
          <div className="text-sm text-muted-foreground">
            <Link to="/" className="hover:text-wood-dark">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/products" className="hover:text-wood-dark">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection animation="fade-in" className="relative">
              <div className="aspect-[4/3] w-full rounded-lg overflow-hidden bg-earth-beige/30 flex items-center justify-center">
                <img 
                  src={mainImage} 
                  alt={product.name} 
                  className="max-w-full max-h-full object-contain transition-opacity duration-300"
                />
              </div>

              <div className="mt-6 grid grid-cols-4 gap-3">
                {productImages.map((image) => (
                  <div 
                    key={image.id}
                    className={`aspect-square rounded-md overflow-hidden cursor-pointer transition-all flex items-center justify-center bg-earth-beige/30 ${
                      mainImage === image.url 
                        ? 'ring-2 ring-wood-dark scale-105' 
                        : 'hover:opacity-80 hover:ring-1 hover:ring-wood-light'
                    }`}
                    onClick={() => setMainImage(image.url)}
                  >
                    <img 
                      src={image.url} 
                      alt={`${product.name} - View ${image.id}`} 
                       className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <Link 
                to="/products"
                className="inline-flex items-center text-wood-dark hover:underline mb-4"
              >
                <ArrowLeft className="mr-1 w-4 h-4" />
                Back to Products
              </Link>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-center mb-6">
                <span className="bg-wood-light/30 text-wood-dark text-sm px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <span className="mx-2 text-muted-foreground">|</span>
                <span className="text-muted-foreground">
                  {product.woodType} Wood
                </span>
              </div>

              <p className="text-lg mb-8">
                {product.description}
              </p>

              <div className="border-b border-muted mb-6">
                <div className="flex space-x-8">
                  <button
                    onClick={() => setActiveTab('description')}
                    className={`pb-2 font-medium relative ${
                      activeTab === 'description'
                        ? 'text-wood-dark'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Description
                    {activeTab === 'description' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-wood-dark"></span>
                    )}
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('specifications')}
                    className={`pb-2 font-medium relative ${
                      activeTab === 'specifications'
                        ? 'text-wood-dark'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Specifications
                    {activeTab === 'specifications' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-wood-dark"></span>
                    )}
                  </button>
                  
                  <button
                    onClick={() => setActiveTab('applications')}
                    className={`pb-2 font-medium relative ${
                      activeTab === 'applications'
                        ? 'text-wood-dark'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    Applications
                    {activeTab === 'applications' && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-wood-dark"></span>
                    )}
                  </button>
                </div>
              </div>

              <div className="mb-8">
                {activeTab === 'description' && (
                  <div className="prose max-w-none">
                    <p className="mb-4">{product.longDescription}</p>
                    <p>
                      Our {product.woodType} plywood is carefully manufactured to ensure consistent quality
                      throughout each sheet. The {product.finish} finish provides an excellent surface for
                      various applications while maintaining the natural beauty of {product.woodType} wood.
                    </p>
                  </div>
                )}

                {activeTab === 'specifications' && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {product.specs.map((spec, index) => (
                        <div key={index} className="bg-earth-beige/20 p-4 rounded-md">
                          <h4 className="text-sm text-muted-foreground">{spec.name}</h4>
                          <p className="font-medium">{spec.value}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-2">
                      <h3 className="font-medium mb-2">Additional Information</h3>
                      <p>
                        All our plywood products undergo rigorous quality control to ensure they meet 
                        industry standards for strength, stability and appearance.
                      </p>
                    </div>
                  </div>
                )}

                {activeTab === 'applications' && (
                  <div>
                    <p className="mb-4">
                      {product.name} is ideal for the following applications:
                    </p>
                    <ul className="space-y-2 list-disc pl-5">
                      {product.applications.map((app, index) => (
                        <li key={index}>{app}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="mt-8 pt-6 border-t border-muted">
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="bg-wood-dark hover:bg-wood-dark/90 text-white px-6 py-3 rounded flex-1 text-center hover-lift"
                  >
                    Request Quote
                  </Link>
                </div>
                <p className="text-sm text-muted-foreground mt-4 text-center">
                  Need assistance? Contact our team for product support.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-earth-beige/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="mb-8">
            <h2 className="text-2xl font-bold">Related Products</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productData
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct, index) => (
                <AnimatedSection key={relatedProduct.id} delay={index * 100} className="group bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-all hover-lift">
                  <Link to={`/products/${relatedProduct.id}`} className="block">
                    <div className="aspect-[4/3] w-full relative overflow-hidden">
                      <img
                        src={relatedProduct.imageUrl1}
                        alt={relatedProduct.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-wood-dark">{relatedProduct.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{relatedProduct.woodType} Wood</p>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const productData: Product[] = [
  {
    id: 1,
    name: "Century Plywood",
    description: "High-quality Century plywood with smooth surface and consistent layers.",
    longDescription: "Our Premium Plywood features exceptional strength and a beautiful, consistent grain pattern. Each sheet is carefully manufactured using selected woods, bonded with high-grade adhesives under precise pressure and temperature conditions to ensure superior quality and durability.",
    category: "century",
    woodType: "Century",
    imageUrl1: "/century1.jpg",
    imageUrl2: "/century2.jpg",
    imageUrl3: "/century3.jpg",
    imageUrl4: "/century4.jpg",
    thickness: "18mm",
    finish: "Sanded",
    grade: "BB/BB",
    specs: [
      { name: "Thickness", value: "18mm" },
      { name: "Grade", value: "BB/BB" },
      { name: "Core", value: "Hardwood" },
      { name: "Surface", value: "Sanded" },
      { name: "Glue Type", value: "Exterior" },
      { name: "Standard Size", value: "2440mm x 1220mm" },
      { name: "Moisture Content", value: "8-10%" },
      { name: "Density", value: "680-720 kg/m³" }
    ],
    applications: [
      "High-end cabinetry",
      "Architectural millwork",
      "Premium furniture",
      "Interior wall panels",
      "Exhibition displays",
      "Designer shelving units"
    ]
  },
  {
    id: 2,
    name: "Marine Plywood",
    description: "Water-resistant plywood ideal for marine applications and outdoor furniture.",
    longDescription: "Marine Plywood is specially designed to withstand exposure to moisture and humidity. It features premium quality hardwood veneers with minimal defects, bonded with WBP (Weather and Boil Proof) adhesive. This creates a highly durable panel that resists delamination and fungal attack in humid environments.",
    category: "Marine",
    woodType: "Pine",
    imageUrl1: "/marine1.jpg",
    imageUrl2: "/marine2.jpg",
    imageUrl3: "/marine3.jpg",
    imageUrl4: "/marine4.jpg",
    thickness: "12mm",
    finish: "Sealed",
    grade: "A/B",
    specs: [
      { name: "Thickness", value: "12mm" },
      { name: "Grade", value: "A/B" },
      { name: "Core", value: "Hardwood" },
      { name: "Surface", value: "Sealed" },
      { name: "Glue Type", value: "WBP (Weather and Boil Proof)" },
      { name: "Standard Size", value: "2440mm x 1220mm" },
      { name: "Moisture Content", value: "10-12%" },
      { name: "Water Resistance", value: "High" }
    ],
    applications: [
      "Boat building",
      "Docks and marina structures",
      "Outdoor furniture",
      "Garden structures",
      "Bathroom cabinetry",
      "Kitchen fixtures in humid environments"
    ]
  },
  {
    id: 3,
    name: "Furniture Grade Oak Plywood",
    description: "Premium oak veneered plywood perfect for high-end furniture production.",
    longDescription: "Our Furniture Grade Oak Plywood combines the natural beauty of oak with the structural advantages of plywood. Each sheet features a premium oak veneer with a consistent grain pattern, ideal for high-end furniture applications where aesthetics are as important as durability.",
    category: "Furniture",
    woodType: "Oak",
    imageUrl1: "/oak1.jpg",
    imageUrl2: "/oak2.jpg",
    imageUrl3: "/oak3.jpg",
    imageUrl4: "/oak4.jpg",
    thickness: "18mm",
    finish: "Sanded",
    grade: "A/A",
    specs: [
      { name: "Thickness", value: "18mm" },
      { name: "Grade", value: "A/A" },
      { name: "Core", value: "Hardwood" },
      { name: "Surface", value: "Fine Sanded" },
      { name: "Glue Type", value: "Interior" },
      { name: "Standard Size", value: "2440mm x 1220mm" },
      { name: "Veneer Thickness", value: "0.6mm" },
      { name: "Stability", value: "High" }
    ],
    applications: [
      "High-end furniture",
      "Custom cabinetry",
      "Interior doors",
      "Wall paneling",
      "Bookshelves",
      "Decorative woodworking"
    ]
  },
  {
    id: 4,
    name: "Decorative Walnut Plywood",
    description: "Luxury walnut veneered plywood for premium furniture and interior finishing.",
    longDescription: "Decorative Walnut Plywood showcases the rich, dark tones and distinctive grain patterns that walnut is prized for. Our premium walnut veneer is carefully selected and expertly applied to create a stunning surface that adds warmth and luxury to any interior design project.",
    category: "Decorative",
    woodType: "Walnut",
    imageUrl1: "/walnut1.jpg",
    imageUrl2: "/walnut2.jpg",
    imageUrl3: "/walnut3.jpg",
    imageUrl4: "/walnut4.jpg",
    thickness: "6mm",
    finish: "Polished",
    grade: "A/A",
    specs: [
      { name: "Thickness", value: "6mm" },
      { name: "Grade", value: "A/A" },
      { name: "Core", value: "Hardwood" },
      { name: "Surface", value: "Polished" },
      { name: "Glue Type", value: "Interior" },
      { name: "Standard Size", value: "2440mm x 1220mm" },
      { name: "Veneer Thickness", value: "0.6mm" },
      { name: "Color", value: "Rich Brown" }
    ],
    applications: [
      "Luxury furniture",
      "Executive office interiors",
      "High-end wall paneling",
      "Designer cabinetry",
      "Acoustic panels",
      "Decorative inlays"
    ]
  },
  {
    id: 5,
    name: "Structural Plywood",
    description: "Heavy-duty plywood designed for structural applications and construction.",
    longDescription: "Our Structural Plywood is engineered for maximum strength and durability in construction applications. It features cross-laminated veneers that distribute loads evenly, providing superior dimensional stability and resistance to warping, even under variable environmental conditions.",
    category: "Structural",
    woodType: "Pine",
    imageUrl1: "/structural1.jpg",
    imageUrl2: "/structural2.jpg",
    imageUrl3: "/structural3.jpg",
    imageUrl4: "/structural4.jpg",
    thickness: "24mm",
    finish: "Rough",
    grade: "C/C",
    specs: [
      { name: "Thickness", value: "24mm" },
      { name: "Grade", value: "C/C" },
      { name: "Core", value: "Softwood" },
      { name: "Surface", value: "Rough" },
      { name: "Glue Type", value: "Exterior" },
      { name: "Standard Size", value: "2440mm x 1220mm" },
      { name: "Load Capacity", value: "High" },
      { name: "Moisture Resistance", value: "Moderate" }
    ],
    applications: [
      "Floor underlayment",
      "Roof sheathing",
      "Wall sheathing",
      "Concrete formwork",
      "Structural bracing",
      "Industrial packaging"
    ]
  },
  {
    id: 6,
    name: "Cherry Veneer Plywood",
    description: "Rich cherry veneered plywood ideal for cabinetry and decorative applications.",
    longDescription: "Cherry Veneer Plywood offers the warm reddish-brown tones and smooth grain pattern that cherry wood is famous for. Our premium cherry veneer is carefully selected for consistency in color and grain, creating a luxurious surface perfect for high-end furniture and cabinetry.",
    category: "Decorative",
    woodType: "Cherry",
    imageUrl1: "/cherry1.jpg",
    imageUrl2: "/cherry2.jpg",
    imageUrl3: "/cherry3.jpg",
    imageUrl4: "/cherry4.jpg",
    thickness: "12mm",
    finish: "Polished",
    grade: "A/B",
    specs: [
      { name: "Thickness", value: "12mm" },
      { name: "Grade", value: "A/B" },
      { name: "Core", value: "Hardwood" },
      { name: "Surface", value: "Polished" },
      { name: "Glue Type", value: "Interior" },
      { name: "Standard Size", value: "2440mm x 1220mm" },
      { name: "Veneer Thickness", value: "0.6mm" },
      { name: "Color", value: "Reddish Brown" }
    ],
    applications: [
      "Custom cabinetry",
      "Fine furniture",
      "Interior doors",
      "Architectural millwork",
      "Wall paneling",
      "Decorative boxes"
    ]
  },
  {
    id: 7,
    name: "Maple Furniture Board",
    description: "Premium maple plywood with consistent grain pattern for furniture making.",
    longDescription: "Maple Furniture Board features the bright, consistent appearance and close grain pattern that maple is known for. This premium plywood offers excellent machining properties and takes finishes beautifully, making it ideal for furniture pieces where a clean, contemporary look is desired.",
    category: "Furniture",
    woodType: "Maple",
    imageUrl1: "/maple1.jpg",
    imageUrl2: "/maple2.jpg",
    imageUrl3: "/maple3.jpg",
    imageUrl4: "/maple4.jpg",
    thickness: "18mm",
    finish: "Sanded",
    grade: "BB/BB",
    specs: [
      { name: "Thickness", value: "18mm" },
      { name: "Grade", value: "BB/BB" },
      { name: "Core", value: "Hardwood" },
      { name: "Surface", value: "Sanded" },
      { name: "Glue Type", value: "Interior" },
      { name: "Standard Size", value: "2440mm x 1220mm" },
      { name: "Veneer Thickness", value: "0.6mm" },
      { name: "Hardness", value: "Medium-High" }
    ],
    applications: [
      "Contemporary furniture",
      "Kitchen cabinetry",
      "Commercial store fixtures",
      "Children's furniture",
      "Shelving systems",
      "Interior trim"
    ]
  },
  {
    id: 8,
    name: "Architectural Maple Plywood",
    description: "Architectural grade maple plywood with exceptional dimensional stability.",
    longDescription: "Our Architectural Maple Plywood is specifically manufactured for high-end architectural applications where appearance and stability are crucial. The premium maple veneer provides a clean, contemporary look that architects and designers prefer for modern interiors.",
    category: "Architectural",
    woodType: "Maple",
    imageUrl1: "/arch-maple1.jpg",
    imageUrl2: "/arch-maple2.jpg",
    imageUrl3: "/arch-maple3.jpg",
    imageUrl4: "/arch-maple4.jpg",
    thickness: "12mm",
    finish: "Sanded",
    grade: "A/A",
    specs: [
      { name: "Thickness", value: "12mm" },
      { name: "Grade", value: "A/A" },
      { name: "Core", value: "Hardwood" },
      { name: "Surface", value: "Fine Sanded" },
      { name: "Glue Type", value: "Interior" },
      { name: "Standard Size", value: "2440mm x 1220mm" },
      { name: "Veneer Thickness", value: "0.6mm" },
      { name: "Dimensional Stability", value: "Excellent" }
    ],
    applications: [
      "Feature walls",
      "Ceiling panels",
      "Custom millwork",
      "Designer furniture",
      "Retail displays",
      "Museum exhibits" 
    ]
  },
  {
    id: 9,
    name: "Marine Grade Birch",
    description: "Water-resistant birch plywood for boat building and marine applications.",
    longDescription: "Marine Grade Birch combines the natural beauty and strength of birch with superior water resistance. Each sheet is manufactured using carefully selected birch veneers bonded with WBP (Weather and Boil Proof) adhesive to create a durable panel that withstands exposure to moisture and humidity.",
    category: "Marine",
    woodType: "Birch",
    imageUrl1: "/marine-birch1.jpg",
    imageUrl2: "/marine-birch2.jpg",
    imageUrl3: "/marine-birch3.jpg",
    imageUrl4: "/marine-birch4.jpg",
    thickness: "18mm",
    finish: "Sealed",
    grade: "AB/B",
    specs: [
      { name: "Thickness", value: "18mm" },
      { name: "Grade", value: "AB/B" },
      { name: "Core", value: "Birch" },
      { name: "Surface", value: "Sealed" },
      { name: "Glue Type", value: "WBP (Weather and Boil Proof)" },
      { name: "Standard Size", value: "2440mm x 1220mm" },
      { name: "Moisture Content", value: "10-12%" },
      { name: "Edge Sealing", value: "Available" }
    ],
    applications: [
      "Boat building",
      "Yacht interiors",
      "Outdoor cabinetry",
      "Marine furniture",
      "Dock structures",
      "Water-exposed architectural elements"
    ]
  }
];

export default ProductDetail;