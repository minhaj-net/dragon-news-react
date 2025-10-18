import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="card bg-base-100 shadow-sm border border-gray-200">
      <div className="card-body p-4">
        <h2 className="text-lg font-semibold mb-3">Find Us On</h2>

        <div className="flex flex-col space-y-2">
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 border-b border-gray-300 rounded-lg hover:bg-base-200 transition"
          >
            <FaFacebookF className="text-blue-600 text-lg" />
            <span className="font-medium">Facebook</span>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 border-b border-gray-300  rounded-lg hover:bg-base-200 transition"
          >
            <FaTwitter className="text-sky-500 text-lg" />
            <span className="font-medium">Twitter</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 border-b border-gray-300 rounded-lg hover:bg-base-200 transition"
          >
            <FaInstagram className="text-pink-500 text-lg" />
            <span className="font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
