```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause an infinite loop because the state is updated within the useEffect function
    setCount(count + 1);
  }, [count]);

  return <div>Count: {count}</div>;
}
```