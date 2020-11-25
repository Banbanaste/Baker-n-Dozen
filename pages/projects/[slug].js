import React, { useState, useEffect } from "react";

// next.js
import Image from "next/image";

// contentful
import {
  fetchContentfulGQL,
  initQuery,
  whereQuery,
} from "../../utils/contentful";

// components
import Layout from "../../components/templates/layout";

// icons
import { GiStoneSpear } from "react-icons/gi";

function ContentfulProject(props) {
  const [isGraphic, setIsGraphic] = useState(true);
  const [body, setBody] = useState();
  const [images, setImages] = useState();

  useEffect(() => {
    setBody(
      <div className="max-w-96 mx-auto text-left text-2xl phone:text-xl space-y-10 phone:space-y-4">
        {props.description.json.content.map((text) => {
          return (
            <p
              id={`p${props.description.json.content.indexOf(text)}`}
              data-aos="fade"
            >
              {text.content[0].value}
            </p>
          );
        })}
      </div>
    );

    setImages(
      <div className="container mx-auto flex flex-wrap justify-center phone:justify-start mt-8 phone:mb-24 phone:space-y-10">
        {props.imagesCollection.items.map((img) => {
          if (img.title != `${props.name.toLowerCase()} header`) {
            return (
              <div
                className="w-56 phone:w-full phone:max-w-84 h-72 overflow-hidden mx-4 shadow-xl phone:m-0"
                data-aos="fade"
              >
                <img src={img.url} alt={img.title} />
              </div>
            );
          } else {
            return (
              <div className="w-full" data-aos="fade">
                <div className="max-w-84 mx-auto phone:m-0 shadow-xl mb-10">
                  <img src={img.url} alt={img.title} />
                </div>
              </div>
            );
          }
        })}
      </div>
    );
  }, []);

  return (
    <Layout>
      <section className="section-default bg-light_burg relative">
        <div className="absolute z-0">
          <Image
            src="/images/proj_bg.svg"
            alt="background waves for design stuffs"
            unsized
          />
        </div>
        <div className="container mx-auto text-tone min-h-screen pt-32 phone:pt-24 phone:px-4 z-20">
          <div className="max-w-96 mx-auto text-left text-2xl mb-6">
            <span className="flex flex-wrap items-center justify-between">
              <a
                className="text-5xl phone:text-3xl font-bold "
                href={props.website}
                target="_blank"
                data-aos="fade"
              >
                {props.name}
              </a>
              <div className="flex items-center phone:text-xl " data-aos="fade">
                <h3 className="tracking-wide mr-6 font-bold">
                  {isGraphic ? "1" : "2"} / 2
                </h3>
                <div
                  className="transform text-5xl phone:text-3xl inline-block -rotate-45 cursor-pointer"
                  onClick={() => setIsGraphic(!isGraphic)}
                >
                  <GiStoneSpear />
                </div>
              </div>
            </span>
          </div>
          {isGraphic ? body : images}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const { data } = await fetchContentfulGQL(initQuery);
  const paths = data.projectCollection.items.map((project) => {
    return {
      params: {
        slug: project.name.toLowerCase(),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = whereQuery(slug);

  const { data } = await fetchContentfulGQL(query);

  return {
    props: {
      ...data.projectCollection.items[0],
    },
  };
};

export default ContentfulProject;
