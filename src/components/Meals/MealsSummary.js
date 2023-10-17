import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered to You</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        malesuada dignissim metus, eget euismod nisi tempor ultrices.
        Suspendisse tincidunt aliquam nisi, vitae laoreet urna porta vitae.
        Integer sit amet placerat nulla, ac tempor neque. Vivamus ullamcorper
        nisl ac augue pretium, eget elementum velit porta.
      </p>
      <p>
        Phasellus nisl tortor, porta id magna nec, rhoncus consequat erat. Nunc
        non ante accumsan, condimentum eros sit amet, malesuada nulla.
      </p>
    </section>
  );
};

export default MealsSummary;
