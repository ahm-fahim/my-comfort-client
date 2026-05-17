import "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        <img
          className="w-full col-span-2 border-b-6 border-l border-gray-500 pb-10 pt-10 rounded-bl-full rounded-tl-full rounded-br-full "
          src={assets.about_img}
        />
        <div className="col-span-3 text-gray-600">
          <p>
            <span className="font-bold">"Wear The Feeling"</span> captures the
            idea that clothing is more than just fabric—it’s an emotional
            experience of ease and confidence. It suggests that when you dress
            the whole family in My Comfort, you aren’t just choosing a style,
            you’re choosing a state of mind
          </p>
          <br />
          <b className="font-bold">OUR MISSION</b>

          <p>
            My Comfort, we believe that clothing is never just about the fabric
            you wear—it is about how that fabric makes you feel. Clothing is an
            intimate, everyday extension of your emotional state, shaping your
            confidence, ease, and peace of mind from the moment you get dressed.
            Our mission is to transform the daily ritual of getting ready into
            an experience of pure, effortless well-being for the entire family.
            We bridge the gap between high fashion and everyday living by
            creating thoughtfully designed, premium pieces for men, women, and
            children. Every stitch, texture, and silhouette we craft is
            engineered to feel like home, allowing you to move through the world
            with absolute comfort and unapologetic confidence. When you dress
            your family in My Comfort, you aren't simply selecting an outfit or
            following a trend; you are choosing a state of mind. We are
            dedicated to helping the modern family{" "}
            <span className="font-bold">"Wear The Feeling"</span> of ultimate
            comfort, every single day.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY CHOOSE"} text2={"US"} />
      </div>
      <div className="text-gray-600">
        <p>
          Choosing My Comfort means choosing a lifestyle where you never have to
          sacrifice elegance for ease. We design with the understanding that
          when your family feels comfortable, they thrive.
          <b>Here is what sets us apart:</b>
          <br />
          <br />
          <b>Uncompromising, All-Day Comfort</b>
          Comfort isn't just a feature of our clothing—it’s our entire
          foundation. We meticulously select premium, ultra-soft, and breathable
          fabrics that feel incredible against the skin. From morning meetings
          to playground adventures and cozy evenings at home, our pieces are
          engineered to move effortlessly with you.
          <br />
          <br />
          <b>High Fashion Meets Everyday Utility</b>
          Who says comfort has to look lazy? We bridge the gap between high-end
          fashion aesthetics and daily practicality. Our collections feature
          sophisticated tailoring, modern silhouettes, and a curated color
          palette that allows the whole family to look effortlessly put-together
          and runway-ready without ever feeling restricted.
          <br />
          <br />
          <b> Cohesive Style for the Whole Family </b>
          We are a one-stop destination for men, women, and children. Instead of
          hopping from brand to brand, you can curate a harmonious, stylish
          wardrobe for your entire household under one roof. Our designs speak a
          unified language of modern luxury, making family styling completely
          effortless.
          <br />
          <br />
          <b> Quality Crafted to Last </b>
          We believe in conscious fashion. Our garments are built with
          exceptional craftsmanship, reinforced stitching, and durable textiles
          designed to withstand the energy of childhood play and the rigor of
          daily wear. We create investment pieces that maintain their shape,
          softness, and rich color wash after wash.
          <br />
          <br />
          <b> A Mindful Style Experience </b>
          When you buy from us, you are investing in your family's well-being.
          We don’t just sell clothing; we deliver a state of mind. Every piece
          is an invitation to step into the world with absolute confidence,
          peace, and ease.
          <br />
          <br />
          <b>Don't just wear the clothes. Wear the feeling.</b>
        </p>
      </div>
    </div>
  );
};

export default About;
