import React from "react";

import { useNavigate,useParams } from "react-router-dom";


export function withrouter( child ) {
    return ( props ) => {
      const params = useParams();
      const navigate = useNavigate();
      return <child { ...props } params ={ params } />;
    }
  }