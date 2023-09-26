const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us</h1>
      <form>
        <input className="border border-black p-3 m-3" placeholder="name"/>
        <input className="border border-black p-3 m-3" placeholder="message"/>
        <button className="bg-gray-100 p-3 m-3 rounded-lg">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
