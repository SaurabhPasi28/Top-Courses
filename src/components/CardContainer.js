import Card from './Card'
// import { useEffect } from 'react';

function CardContainer(props) {
  let courses=props.courses;
  let category=props.category;
  let AllCourses=[];
  const getCourses=()=>{
    if(category==="All"){

      Object.values(courses).forEach((courseCategory)=>{
         courseCategory.forEach((course)=>{
            AllCourses.push(course);
         })
      })
      return AllCourses;
    }else{
      return courses[category];
    }
  };

  // useEffect(() => {
  //   const loadScrollReveal = async () => {
  //     const ScrollReveal = (await import('scrollreveal')).default;
  //     ScrollReveal().reveal('.card', {
  //       delay: 200,
  //       distance: '50px',
  //       origin: 'top',
  //       duration: 1000,
  //       easing: 'ease-out',
  //       reset: true,
  //     });

  //   };
  //   loadScrollReveal();
  // }, []);
  return (
    <div className='flex flex-wrap justify-evenly gap-8 w-[75%] mt-10'> 
      {getCourses().map((coursesdata)=>{
        return(
          <Card key={coursesdata.id} data={coursesdata}/>
        )
      })
    }
    </div>
  )
}

export default CardContainer