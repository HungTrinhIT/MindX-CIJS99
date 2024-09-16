import React, { useEffect } from 'react';

const Box = () => {
  useEffect(() => {
    const handleScroll = () => {
      const position = document.documentElement.scrollTop;
      console.log('🚀 ~ position:', position);
    };

    document.addEventListener('scroll', handleScroll);

    // Clean up function
    // Unmounting phase
    return () => {
      // Nơi xử lý/ dọn dẹp những gì không cần thiết
      // trước khi component bị gỡ khỏi dom
      console.log('Unmounting BOX runs');
      document.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div
      style={{
        border: '1px solid #000',
      }}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis delectus
      consequuntur explicabo dolor. Cumque asperiores quasi animi delectus neque
      cupiditate harum voluptatum facere, reiciendis reprehenderit iusto officia
      est sed doloremque iste quo, ullam ad commodi eius aperiam. Corrupti rerum
      maiores voluptatum illum, ea fugit nulla molestias nostrum facilis impedit
      laudantium reiciendis est quia quas tempora. Eius quas eos voluptates,
      totam aspernatur commodi minima impedit. Voluptatem soluta saepe
      accusantium nulla non velit minus expedita ex laboriosam laborum incidunt
      ipsum deserunt accusamus repudiandae laudantium maiores, eos error?
      Dolorum tenetur a nobis odio iure odit, quae porro dolorem deleniti
      exercitationem, ut fugit cupiditate eos totam voluptatem voluptate sint,
      sunt id ea doloribus harum libero! Sed beatae quae iusto doloribus modi
      voluptatum culpa, fugit, aspernatur excepturi fuga sunt? Illo officia
      tenetur, asperiores beatae accusantium necessitatibus, consequatur
      exercitationem eligendi, sit distinctio et commodi id placeat magnam unde!
      Labore, eligendi eum autem molestiae asperiores repudiandae, tenetur, et
      commodi nisi fugiat ratione maxime sit qui vitae? Dicta praesentium
      pariatur quae est non. Sed dolorem, cum repellat repellendus laboriosam
      ut, obcaecati voluptatum veniam labore sint suscipit dolor neque facilis
      dolore eius perferendis numquam officiis quas nobis ad accusantium ea
      fugit! Vel, esse? Expedita accusamus similique beatae cupiditate
      repudiandae corrupti maxime magnam totam perferendis corporis nulla
      reiciendis eveniet explicabo sit consectetur tempore earum at, illo magni.
      Ea laborum atque, ratione alias ut dolore accusantium eaque quas iusto
      quis velit aspernatur sunt neque ab ducimus suscipit saepe repellendus
      amet rerum voluptatibus nesciunt beatae laudantium, quos a! Placeat vero
      nostrum sapiente molestias, necessitatibus aliquid numquam eius impedit
      consequatur dolore quos natus dignissimos sunt nesciunt accusantium at
      doloribus atque sed nulla temporibus id laboriosam! Molestias deserunt sed
      ab enim accusantium a voluptatibus corporis dolores, quod expedita sit
      mollitia nemo vitae quam eveniet. Repudiandae commodi nihil aliquid
      accusamus iure explicabo suscipit temporibus dolor?
    </div>
  );
};

export default Box;
