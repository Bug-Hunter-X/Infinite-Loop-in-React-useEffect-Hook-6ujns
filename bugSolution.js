```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Add a condition or other logic to avoid infinite updates
    console.log('Count updated:', count); //Check to avoid infinite renders
  }, []); // Empty dependency array to run once on mount

  return <div>Count: {count}</div>;
}
```