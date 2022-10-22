import Link from "next/link"

const Success = () => {
  return (
    <div className="form-success">
      Form successfully submitted!<Link href="/">Back to portfolio</Link>
    </div>
  )
}

export default Success
