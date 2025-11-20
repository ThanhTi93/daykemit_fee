import { FaClipboardList } from "react-icons/fa";
import { MdArticle, MdFeedback, MdLibraryBooks, MdManageAccounts } from "react-icons/md";

export const LISTMENU = [
    {
        title: "Manage Course",
        icon : <MdLibraryBooks className="text-2xl text-indigo-600" />,
        items : [
            {name: "Courses", path : "/courses"},
            {name: "Courses Offers", path : "/course-offers"},
            {name: "Entrollments", path : "/entrollments"},
        ]
    }, {
        title: "Manage User",
        icon : <MdManageAccounts className="text-2xl text-blue-600" />,
        items : [
            {name: "Accounts", path : "/accounts"},
            {name: "Mentors", path : "/mentors"},
        ]
    },
    {
        title: "Feedbacks",
        icon : <MdFeedback className="text-2xl text-orange-500" />,
        items : [
            {name: "Reviews", path : "/reviews"},
            {name: "Testimoials", path : "/testimoials"},
        ]
    },
    {
        title: "Manage Blog",
        icon : <MdArticle className="text-2xl text-red-500" />,
        items : [
            {name: "Blogs", path : "/blogs"},
            {name: "Blog Categories", path : "/blog-categories"},
        ]
    },
    {
        title: "Manage Orders",
        icon : <FaClipboardList className="text-2xl text-indigo-600" />,
        items : [
            {name: "Orders", path : "/orders"},
            {name: "Payments", path : "/payments"},
        ]
     }
]
