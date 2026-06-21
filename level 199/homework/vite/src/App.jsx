import { useEffect, useState } from "react";

export default function App() {
  const colors = ["red", "blue", "green", "yellow"];

  const [text, setText] = useState("");

  const [colorIndex, setColorIndex] = useState(0);

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  const [values, setValues] = useState(() => {
    return (
      JSON.parse(localStorage.getItem("formData")) || {
        name: "",
        email: "",
        password: "",
      }
    );
  });

  const [errors, setErrors] = useState({});

  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    document.body.style.backgroundColor = colors[colorIndex];
  }, [colorIndex]);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(values));
  }, [values]);

  const changeColor = () => {
    setColorIndex((prev) => (prev + 1) % colors.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!values.name) newErrors.name = "Name is required";
    if (!values.email) newErrors.email = "Email is required";
    if (!values.password) newErrors.password = "Password is required";

    setErrors(newErrors);
  };

  const addPost = () => {
    if (!post.title || !post.description) return;

    setPosts((prev) => [...prev, post]);

    setPost({
      title: "",
      description: "",
    });
  };

  return (
    <div className="min-h-screen p-8 flex flex-col gap-10">

      <div>
        <h1 className="text-2xl font-bold mb-3">
          Real Time Input
        </h1>

        <input
          className="border p-2 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <p className="mt-3">{text}</p>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-3">
          Background Color
        </h1>

        <button
          onClick={changeColor}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Change Color
        </button>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-3">
          Timer
        </h1>

        <h2 className="text-3xl">{time}</h2>

        <div className="flex gap-3 mt-3">
          <button
            onClick={() => setRunning(false)}
            className="bg-red-500 px-4 py-2 rounded text-white"
          >
            Pause
          </button>

          <button
            onClick={() => setRunning(true)}
            className="bg-green-500 px-4 py-2 rounded text-white"
          >
            Continue
          </button>

          <button
            onClick={() => {
              setTime(0);
              setRunning(true);
            }}
            className="bg-blue-500 px-4 py-2 rounded text-white"
          >
            Restart
          </button>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-3">
          Form Validation
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 w-72"
        >
          <input
            className="border p-2 rounded"
            placeholder="Name"
            value={values.name}
            onChange={(e) =>
              setValues({
                ...values,
                name: e.target.value,
              })
            }
          />
          {errors.name && <p>{errors.name}</p>}

          <input
            className="border p-2 rounded"
            placeholder="Email"
            value={values.email}
            onChange={(e) =>
              setValues({
                ...values,
                email: e.target.value,
              })
            }
          />
          {errors.email && <p>{errors.email}</p>}

          <input
            className="border p-2 rounded"
            placeholder="Password"
            value={values.password}
            onChange={(e) =>
              setValues({
                ...values,
                password: e.target.value,
              })
            }
          />
          {errors.password && <p>{errors.password}</p>}

          <button className="bg-black text-white p-2 rounded">
            Submit
          </button>
        </form>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-3">
          Posts
        </h1>

        <div className="flex flex-col gap-3 w-80">
          <input
            className="border p-2 rounded"
            placeholder="Title"
            value={post.title}
            onChange={(e) =>
              setPost({
                ...post,
                title: e.target.value,
              })
            }
          />

          <textarea
            className="border p-2 rounded"
            placeholder="Description"
            value={post.description}
            onChange={(e) =>
              setPost({
                ...post,
                description: e.target.value,
              })
            }
          />

          <button
            onClick={addPost}
            className="bg-purple-600 text-white p-2 rounded"
          >
            Add Post
          </button>
        </div>

        <div className="mt-5 flex flex-col gap-4">
          {posts.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded bg-white"
            >
              <h2 className="font-bold">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}