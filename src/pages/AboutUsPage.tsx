import React from 'react';
import { PolicyPageLayout } from '../components/PolicyPageLayout';
import { PolicySection } from '../components/PolicySection';

export const AboutUsPage: React.FC = () => {
  return (
    <PolicyPageLayout title="About Us">
      <p className="text-lg font-semibold text-stone-800">
        Creative Production House for Art, D&eacute;cor &amp; Custom Visual Solutions
      </p>
      <p className="text-lg font-semibold text-[var(--accent)]">Transforming Ideas into Beautiful Spaces</p>

      <p>
        Canvass India is a creative production house specializing in canvas frames, acrylic artwork, posters,
        cork products, yoga mats, wall d&eacute;cor, and customized home and lifestyle d&eacute;cor solutions. We
        bring together creativity, quality materials, modern production techniques, and meticulous finishing to
        create products that add character, personality, and style to every space.
      </p>
      <p>
        From a single customized artwork to large-scale d&eacute;cor requirements for homes, offices, hotels,
        studios, retail spaces, institutions, and commercial interiors, Canvass India delivers solutions designed
        to match every vision, requirement, and budget.
      </p>
      <p>Our philosophy is simple &mdash; create products that look beautiful, feel premium, and are made to last.</p>

      <PolicySection heading="Our Product Range">
        <p className="font-semibold text-stone-800">Canvas Frames</p>
        <p>Bring photographs, artwork, memories, and creative designs to life with our premium canvas frames.</p>
        <p>Our canvas printing and framing solutions are suitable for:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Family and personal photographs</li>
          <li>Wedding and celebration memories</li>
          <li>Artistic reproductions</li>
          <li>Nature and landscape artwork</li>
          <li>Motivational and inspirational designs</li>
          <li>Religious and spiritual artwork</li>
          <li>Corporate and office d&eacute;cor</li>
          <li>Hotel and hospitality interiors</li>
          <li>Restaurants and caf&eacute;s</li>
          <li>Bedroom and living-room d&eacute;cor</li>
          <li>Customized gifting</li>
        </ul>
        <p>We offer different sizes, layouts, finishes, and frame styles to complement contemporary as well as traditional interiors.</p>
        <p>
          Our canvas products combine high-quality printing, carefully selected canvas material, sturdy frames,
          and professional finishing, resulting in artwork that becomes a lasting part of your d&eacute;cor.
        </p>
      </PolicySection>

      <PolicySection heading="Acrylic Prints & Acrylic Wall Art">
        <p>For a modern, elegant, and premium appearance, acrylic prints are an excellent choice.</p>
        <p>
          Canvass India produces high-quality acrylic posters, acrylic photo panels, artwork, signage, and
          decorative panels with sharp imagery and vibrant visual impact.
        </p>
        <p>
          Acrylic is particularly suitable for contemporary homes, corporate offices, showrooms, hotels,
          restaurants, reception areas, and premium commercial interiors.
        </p>
        <p className="font-semibold text-stone-800">Applications include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Photo panels</li>
          <li>Wall art</li>
          <li>Interior d&eacute;cor</li>
          <li>Corporate branding</li>
          <li>Office graphics</li>
          <li>Reception-area artwork</li>
          <li>Retail displays</li>
          <li>Restaurant d&eacute;cor</li>
          <li>Hotel d&eacute;cor</li>
          <li>Customized gifts</li>
          <li>Inspirational artwork</li>
          <li>Decorative panels</li>
        </ul>
        <p>
          Our acrylic solutions can be customized in different sizes and formats, allowing designers, architects,
          businesses, and homeowners to create distinctive visual installations.
        </p>
      </PolicySection>

      <PolicySection heading="Posters & Custom Wall Graphics">
        <p>A great wall can completely transform the personality of a room.</p>
        <p>
          Canvass India produces custom posters and wall graphics for both decorative and functional
          applications. Whether you need a striking artwork for your living room, an inspirational poster for
          your workspace, or a complete visual theme for a commercial interior, we can produce customized
          solutions according to your design.
        </p>
        <p>Our poster production is suitable for:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Home interiors</li>
          <li>Bedrooms</li>
          <li>Living rooms</li>
          <li>Children&apos;s rooms</li>
          <li>Offices</li>
          <li>Gyms and fitness studios</li>
          <li>Schools and institutions</li>
          <li>Restaurants and caf&eacute;s</li>
          <li>Retail stores</li>
          <li>Hotels</li>
          <li>Events and exhibitions</li>
        </ul>
        <p>Customers can choose from existing artwork or provide their own photographs, artwork, illustrations, designs, and branding materials.</p>
      </PolicySection>

      <PolicySection heading="Cork Products & Cork D&eacute;cor">
        <p>Cork is a versatile, natural-looking material that brings warmth, texture, and functionality into interiors.</p>
        <p>
          Canvass India offers cork-based d&eacute;cor and functional products suitable for homes, offices,
          educational spaces, creative studios, caf&eacute;s, and commercial interiors.
        </p>
        <p className="font-semibold text-stone-800">Cork applications:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Cork boards</li>
          <li>Notice boards</li>
          <li>Pin boards</li>
          <li>Decorative cork panels</li>
          <li>Office organization boards</li>
          <li>Kids&apos; learning boards</li>
          <li>Memory boards</li>
          <li>Photo display boards</li>
          <li>Creative wall d&eacute;cor</li>
          <li>Customized cork products</li>
        </ul>
        <p>
          Cork products can be customized according to size, shape, design, and application, making them an
          excellent combination of natural aesthetics and everyday functionality.
        </p>
      </PolicySection>

      <PolicySection heading="Yoga Mats & Fitness Products">
        <p>
          Canvass India also develops and produces yoga mats and customized fitness-related products designed
          for yoga studios, gyms, wellness centers, corporate wellness programs, events, and personal use.
        </p>
        <p>
          Our yoga mats can be customized for branding and visual identity, making them particularly suitable
          for organizations looking for promotional or branded wellness products.
        </p>
        <p className="font-semibold text-stone-800">Suitable for:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Yoga studios</li>
          <li>Fitness centers</li>
          <li>Wellness resorts</li>
          <li>Corporate wellness programs</li>
          <li>Events and workshops</li>
          <li>Schools and institutions</li>
          <li>Personalized gifting</li>
          <li>Promotional campaigns</li>
        </ul>
        <p>Whether you need a simple yoga mat or a customized branded solution, Canvass India can help bring your concept into production.</p>
      </PolicySection>

      <PolicySection heading="Home D&eacute;cor Collection">
        <p>Your home should reflect your personality.</p>
        <p>
          Canvass India creates a wide range of decorative and personalized products designed to add beauty,
          warmth, and individuality to interiors.
        </p>
        <p>Our home d&eacute;cor solutions can include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Canvas wall art</li>
          <li>Acrylic artwork</li>
          <li>Posters</li>
          <li>Photo d&eacute;cor</li>
          <li>Cork d&eacute;cor</li>
          <li>Inspirational wall art</li>
          <li>Personalized artwork</li>
          <li>Decorative panels</li>
          <li>Customized wall displays</li>
          <li>Kids&apos; room d&eacute;cor</li>
          <li>Bedroom d&eacute;cor</li>
          <li>Living-room d&eacute;cor</li>
          <li>Office d&eacute;cor</li>
        </ul>
        <p>From minimal contemporary designs to vibrant artistic compositions, we create d&eacute;cor products that work beautifully across different interior styles.</p>
      </PolicySection>

      <PolicySection heading="Customized Production">
        <p>At Canvass India, customization is at the heart of what we do.</p>
        <p>
          We understand that every customer, designer, architect, and business has different requirements. That
          is why we offer custom production based on size, artwork, material, quantity, finish, and application.
        </p>
        <p className="font-semibold text-stone-800">
          You can provide: Your Design &rarr; Your Size &rarr; Your Material &rarr; Your Finish &rarr; Our Production
        </p>
        <p>Our team works with the supplied artwork or design concept and converts it into a professionally finished physical product.</p>
        <p>We can support both individual orders and bulk production requirements.</p>
      </PolicySection>

      <PolicySection heading="Solutions for Interior Designers & Architects">
        <p>
          Canvass India works as a production partner for interior designers, architects, decorators,
          contractors, hospitality professionals, and commercial-space developers.
        </p>
        <p>We understand the importance of accurate dimensions, consistent quality, finishing, and timely production when working on interior projects.</p>
        <p>Our products can be incorporated into:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Residential interiors</li>
          <li>Corporate offices</li>
          <li>Hotels</li>
          <li>Restaurants</li>
          <li>Caf&eacute;s</li>
          <li>Retail stores</li>
          <li>Schools</li>
          <li>Hospitals</li>
          <li>Gyms</li>
          <li>Yoga studios</li>
          <li>Wellness centers</li>
          <li>Showrooms</li>
          <li>Hospitality projects</li>
          <li>Commercial interiors</li>
        </ul>
        <p>From individual wall pieces to multiple-product d&eacute;cor packages, Canvass India provides production support for complete interior requirements.</p>
      </PolicySection>

      <PolicySection heading="Corporate & Commercial D&eacute;cor">
        <p>A well-designed workspace communicates professionalism and brand identity.</p>
        <p>We provide customized d&eacute;cor and visual products for businesses looking to create attractive and engaging environments.</p>
        <p>Solutions can include:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Corporate wall art</li>
          <li>Brand graphics</li>
          <li>Motivational artwork</li>
          <li>Acrylic panels</li>
          <li>Posters</li>
          <li>Office d&eacute;cor</li>
          <li>Reception artwork</li>
          <li>Employee recognition displays</li>
          <li>Meeting-room graphics</li>
          <li>Training-room d&eacute;cor</li>
          <li>Brand-focused wall installations</li>
        </ul>
        <p>We can produce customized products based on corporate brand guidelines, colours, logos, photographs, and design requirements.</p>
      </PolicySection>

      <PolicySection heading="Quality & Finishing">
        <p>At Canvass India, we believe that quality is not only about the material &mdash; it is about the complete finished product.</p>
        <p>We pay attention to:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-semibold text-stone-800">Material Selection</span> &mdash; Choosing suitable materials according to the application.</li>
          <li><span className="font-semibold text-stone-800">Print Quality</span> &mdash; Producing sharp, detailed, and visually appealing graphics.</li>
          <li><span className="font-semibold text-stone-800">Colour &amp; Image Reproduction</span> &mdash; Maintaining strong visual consistency and accurate artwork reproduction.</li>
          <li><span className="font-semibold text-stone-800">Construction</span> &mdash; Ensuring products are properly assembled and finished.</li>
          <li><span className="font-semibold text-stone-800">Edge &amp; Surface Finishing</span> &mdash; Giving attention to the details that make a finished product look premium.</li>
          <li><span className="font-semibold text-stone-800">Packaging</span> &mdash; Taking care to protect products during handling and transportation.</li>
        </ul>
      </PolicySection>

      <PolicySection heading="From Digital Design to Physical Product">
        <p>Canvass India bridges the gap between digital creativity and physical d&eacute;cor.</p>
        <p>A photograph, illustration, artwork, brand design, or creative idea can be transformed into a finished product that becomes part of a real environment.</p>
        <p className="font-semibold text-stone-800">Our Process</p>
        <ol className="list-decimal pl-6 space-y-1">
          <li><span className="font-semibold">Idea</span> &mdash; Share your requirement, concept, photograph, artwork, or design.</li>
          <li><span className="font-semibold">Design</span> &mdash; We help prepare the artwork according to the selected product and dimensions.</li>
          <li><span className="font-semibold">Material</span> &mdash; Select the appropriate canvas, acrylic, poster, cork, mat, or other material.</li>
          <li><span className="font-semibold">Production</span> &mdash; Our production team converts the approved artwork into the finished product.</li>
          <li><span className="font-semibold">Finishing</span> &mdash; The product is checked and professionally finished.</li>
          <li><span className="font-semibold">Delivery</span> &mdash; The completed product is carefully packed and prepared for delivery or installation.</li>
        </ol>
      </PolicySection>

      <PolicySection heading="Why Canvass India?">
        <ul className="list-disc pl-6 space-y-2">
          <li><span className="font-semibold text-stone-800">Creative Approach</span> &mdash; We combine design thinking with practical production expertise.</li>
          <li><span className="font-semibold text-stone-800">Wide Product Portfolio</span> &mdash; Canvas, acrylic, posters, cork, yoga mats, and other d&eacute;cor solutions under one roof.</li>
          <li><span className="font-semibold text-stone-800">Custom Manufacturing</span> &mdash; Products can be made according to your required size, design, quantity, and application.</li>
          <li><span className="font-semibold text-stone-800">Quality Materials</span> &mdash; We focus on selecting materials suitable for the intended use and finish.</li>
          <li><span className="font-semibold text-stone-800">Professional Finishing</span> &mdash; Attention to detail helps create products with a premium appearance.</li>
          <li><span className="font-semibold text-stone-800">Bulk Production</span> &mdash; We support projects requiring multiple products and consistent output.</li>
          <li><span className="font-semibold text-stone-800">One-Stop Production Partner</span> &mdash; Instead of coordinating with multiple vendors, customers can source a wide range of d&eacute;cor products through one production house.</li>
        </ul>
      </PolicySection>

      <PolicySection heading="For Homes, Businesses & Creative Spaces">
        <p>
          Whether you are decorating a new home, renovating an office, setting up a hotel, opening a caf&eacute;,
          designing a studio, creating a wellness centre, or developing a commercial interior, Canvass India
          provides creative production solutions to bring your walls and spaces to life.
        </p>
        <p>We believe d&eacute;cor should not simply fill an empty wall.</p>
        <p>It should create an atmosphere. It should express an identity. It should tell a story.</p>
        <p>That is what we aim to create with every product.</p>
      </PolicySection>

      <PolicySection heading="Our Vision">
        <p>
          To become a trusted and innovative production house for custom d&eacute;cor, visual products, lifestyle
          materials, and creative interior solutions, delivering quality products that combine design,
          functionality, and craftsmanship.
        </p>
      </PolicySection>

      <PolicySection heading="Our Mission">
        <p>
          To make high-quality customized d&eacute;cor accessible to homeowners, businesses, designers,
          architects, institutions, and creative professionals through reliable production, diverse materials,
          professional finishing, and customer-focused service.
        </p>
      </PolicySection>

      <PolicySection>
        <p className="text-lg font-semibold text-stone-800">Canvass India</p>
        <p className="font-semibold text-[var(--accent)]">Create. Print. Frame. Decorate.</p>
        <p>
          From a memorable photograph to a statement wall, from a creative poster to a functional cork board,
          from premium acrylic artwork to a branded yoga mat &mdash; Canvass India turns ideas into finished
          products.
        </p>
        <p className="font-semibold text-stone-800">Your Design. Your Vision. Our Production.</p>
        <p>Canvass India &mdash; Bringing Creative Ideas to Life.</p>
      </PolicySection>

      <PolicySection heading="Contact Us">
        <p>Email: info@canvassindia.com</p>
        <p>Contact number: 78930 51555</p>
        <p>
          Address: Building No./Flat No. H NO 4-9-197/8184, HMT Nagar, HMT Nagar Main Road, Nacharam, Hyderabad,
          Hyderabad District, Telangana &ndash; 500076
        </p>
      </PolicySection>
    </PolicyPageLayout>
  );
};
