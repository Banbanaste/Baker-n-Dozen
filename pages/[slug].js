import React, { useState, useEffect } from "react";

// contentful
import { fetchContentfulGQL, initQuery, whereQuery } from "../utils/contentful";

// components
import Layout from "../components/templates/layout";

// icons
import { GiStoneSpear } from "react-icons/gi";

function Post(props) {
  const [isGraphic, setIsGraphic] = useState(true);
  const [body, setBody] = useState();
  const [images, setImages] = useState();

  useEffect(() => {
    setBody(
      <div className="max-w-96 mx-auto text-left text-2xl phone:text-base space-y-10 phone:space-y-4">
        {props.description.json.content.map((text) => {
          return (
            <p
              data-aos="fade-down"
              data-aos-delay={`${
                props.description.json.content.indexOf(text) + 1
              }00`}
              data-aos-duration="500"
              data-aos-easing="ease"
              data-aos-once="true"
            >
              {text.content[0].value}
            </p>
          );
        })}
      </div>
    );

    setImages(
      <div className="container mx-auto flex flex-wrap justify-center mt-16">
        {props.imagesCollection.items.map((img) => {
          if (img.title != `${props.name.toLowerCase()} header`) {
            return (
              <div
                className="w-48 h-72 overflow-hidden mx-4 shadow-xl phone:hidden"
                data-aos="fade-down"
                data-aos-delay={`${
                  props.imagesCollection.items.indexOf(img) + 1
                }00`}
                data-aos-duration="500"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                <img src={img.url} alt={img.title} />
              </div>
            );
          } else {
            return (
              <div
                className="w-full"
                data-aos="fade-down"
                data-aos-delay="300"
                data-aos-duration="500"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                <div className="max-w-84 -mb-24 mx-auto shadow-xl">
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
      <section className="section-default">
        <div className="container mx-auto text-burg min-h-screen pt-32 phone:pt-24 phone:px-4">
          <div className="max-w-96 mx-auto text-left text-2xl mb-6">
            <span className="flex flex-wrap items-center justify-between">
              <a
                className="text-5xl phone:text-3xl font-bold "
                href={props.website}
                target="_blank"
                data-aos="fade-down"
                data-aos-delay="100"
                data-aos-duration="500"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                {props.name}
              </a>
              <div
                className="flex items-center phone:text-xl phone:mt-4"
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="500"
                data-aos-easing="ease"
                data-aos-once="true"
              >
                <h3 className="tracking-wide mr-10 font-bold">
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
  const paths = data.projectCollection.items.map((project) => ({
    params: {
      slug: project.name.toLowerCase(),
    },
  }));

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

export default Post;
